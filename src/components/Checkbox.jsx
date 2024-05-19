import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react"
import { CheckIcon } from "../assets/CheckIcon"
import { useState } from "react"

const checkbox = tv({
	slots: {
    base: "border-default hover:bg-default-200",	
    content: "text-default-500"
  },
  variants: {
    isSelected: {
      true: {
        base: "border-success bg-success hover:bg-success-500 hover:border-success-500",
        content: "text-success-foreground pl-1"
      }
    },
    isFocusVisible: {
      true: { 
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      }
    }
  }
})


const Checkbox = ({ label, value, onChange }) => {

	const {
		children,
		isSelected,
		isFocusVisible,
		getBaseProps,
		getLabelProps,
		getInputProps,
	} = useCheckbox({
		defaultSelected: value,
	})

	const styles = checkbox({ 
		isSelected: value, 
		isFocusVisible: false })

	return (
		<label {...getBaseProps()} className="checkbox-label">
			<VisuallyHidden>
				<input {...getInputProps()} checked={value} onChange={onChange}/>
			</VisuallyHidden>
			<Chip
			key={value}
				classNames={{
					base: styles.base(),
					content: styles.content(),
				}}
				color="default"
				radius="large"
				startContent={value ? <CheckIcon className='ml-1'/> : null}
				variant = "faded"
				{...getLabelProps}
				>
					{children ? children : label}
			</Chip>
		</label>
	)
}
export default Checkbox