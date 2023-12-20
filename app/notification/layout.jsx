import Navbar from "@/components/Navbar"

export default function CheckOutLayout({children}) {
    return (
      <section>
        <Navbar />
        {children}
      </section>
    )
  }