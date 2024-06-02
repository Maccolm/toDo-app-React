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
    },
	 isDisabled: {
		true: {
			base:"border-muted bg-muted cursor-not-allowed",
			content: "text-muted-foreground"
		}
	 }
  }
})


const Checkbox = ({ label, value, onChange, disabled }) => {

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
		isFocusVisible: false,
		isDisabled: disabled
	})

	return (
		<label {...getBaseProps()} className="checkbox-label">
			<VisuallyHidden>
				<input {...getInputProps()} checked={value} onChange={onChange} disabled={disabled}/>
			</VisuallyHidden>
			<Chip
			key={value}
				classNames={{
					base: styles.base(),
					content: styles.content(),
				}}
				className="h-9 rounded-lg"
				color="default"
				radius="small"
				startContent={disabled ? <Spinner/> : (value ? <CheckIcon className='ml-1'/> : null)}
				variant = "faded"
				{...getLabelProps}
				>
					{children ? children : label}
			</Chip>
		</label>
	)
}

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);
export default Checkbox