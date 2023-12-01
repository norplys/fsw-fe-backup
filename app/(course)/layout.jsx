import NavbarBeranda from "@/components/NavbarBeranda"

export default function CoursesLayout({children}) {
    return (
      <section>
        <NavbarBeranda />
        {children}
      </section>
    )
  }