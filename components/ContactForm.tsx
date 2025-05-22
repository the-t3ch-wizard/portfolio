"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { GrSend } from "react-icons/gr";

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { contactFormSchema } from "@/validations/contact/contact-form"
import { LoaderCircle } from "lucide-react"

export default function ContactForm({ name, email, message } : {
  name?: string;
  email?: string;
  message?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: name || "",
      email: email || "",
      message: message || "",
    },
  })

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true)
    console.log(values)
    try {
      // const response = await sendContactUsMail(values);
      // toast.success(response.message || "Contact details sent successfully")
      toast.success("Contact details sent successfully")
      form.reset()
    } catch (error: any) {
      console.log('error', error)
      toast.error(error?.response?.data?.message || error?.message || "Failed to send details. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message here..." className="resize-none min-h-[120px]" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full flex items-center" disabled={isSubmitting}>
            {
              isSubmitting ? 
              <>
                Sending
                <LoaderCircle className="animate-spin" />
              </> :
              <>
                Send Message
                <GrSend />
              </>
              }
          </Button>
        </form>
      </Form>
    </div>
  )
}
