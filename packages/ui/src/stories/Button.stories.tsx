import { expect, fn, userEvent, within } from "@storybook/test"
import { Button } from "../components"
import type { Meta, StoryObj } from "@storybook/react"
export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "click",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const Text: Story = {
  args: {
    children: "click",
    variant: "text",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "disabled",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")
    await userEvent.click(button)
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}
