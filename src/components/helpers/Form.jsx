import React, { useRef, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const formRef = useRef(null);
  const textareaRef = useRef(null);

  const formSchema = useMemo(
    () =>
      z.object({
        username: z.string().min(2, "Please enter a valid name"),
        email: z.string().email("Please enter a valid email"),
        phone: z.string().min(5, "Please enter a valid phone number"),
        message: z.string().min(10, "At least 10 characters"),
      }),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", phone: "", message: "" },
    mode: "onSubmit",
  });

  const messageValue = watch("message");

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const max = parseFloat(getComputedStyle(el).lineHeight || "24") * 4;
    el.style.height = `${Math.min(el.scrollHeight, max)}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [messageValue]);

  const onSubmit = async () => {
    if (!formRef.current) return;
    try {
      await emailjs.sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent", { description: "We'll get back to you shortly." });
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Error", { description: "Something went wrong, please try again." });
    }
  };

  const { ref: registerRef, ...registerProps } = register("message");

  return (
    <>
      <Toaster theme="dark" position="bottom-right" />
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form-contact">

        <div className="form-field">
          <span className="form-label">NAME</span>
          <input
            {...register("username")}
            name="username"
            placeholder="Alex Carter"
            className="form-input"
          />
          {errors.username && <p className="form-error">{errors.username.message}</p>}
        </div>

        <div className="form-field">
          <span className="form-label">PHONE</span>
          <input
            {...register("phone")}
            name="phone"
            type="tel"
            placeholder="+1 234 567 8910"
            className="form-input"
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>

        <div className="form-field">
          <span className="form-label">PROJECT NOTES</span>
          <textarea
            {...registerProps}
            name="message"
            ref={(e) => { registerRef(e); textareaRef.current = e; }}
            placeholder="Tell about the space, the brief..."
            rows={1}
            className="form-input form-input--textarea"
          />
          {errors.message && <p className="form-error">{errors.message.message}</p>}
        </div>

        <div className="form-field">
          <span className="form-label">EMAIL</span>
          <input
            {...register("email")}
            name="email"
            type="email"
            placeholder="hello@borsoga.com"
            className="form-input"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div className="form-submit pt-10 pb-16 lg:py-[clamp(0.75rem,1.5vw,2.5rem)]">
          <button type="submit" disabled={isSubmitting} className="form-btn">
            {isSubmitting ? "SENDING..." : "SEND TRANSMISSION"}
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 14.25L14.25 3.75M14.25 3.75H6.75M14.25 3.75V11.25"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </form>
    </>
  );
}
