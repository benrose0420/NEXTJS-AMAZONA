import { z } from "zod"
import { CartSchema, 
         OrderItemSchema, 
         ProductInputSchema,
         UserInputSchema,
         UserSignInSchema,
} from "@/lib/validator"

export type IProductInput = z.infer<typeof ProductInputSchema>
export type Data = {
  products: IProductInput[]
  users: IUserInput[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>

// user
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>