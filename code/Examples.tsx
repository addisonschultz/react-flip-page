import { Override } from "framer"

export function Page(): Override {
    return {
        onPageChange: () => {
            window.alert("boom")
        },
    }
}
