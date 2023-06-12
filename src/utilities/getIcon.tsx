import { ReactElement } from "react"

export const getIcon = (bootstrapIconClassNames: string): ReactElement => {
	return <i className={bootstrapIconClassNames}></i>
}
