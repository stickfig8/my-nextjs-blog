import Container from "@/components/layouts/Container";

export default function NotFound() {
    return(
        <Container>
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-2xl text-[var(--mainText)]">Page does not exist.</p>
        </Container>
    )
}