import { Override } from "framer"

export function Page(): Override {
    return {
        onPageChange: () => {
            console.log("Page Changed")
        },
    }
}
