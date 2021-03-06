import styled, { lightTheme, rgba } from '@slup/theming'

export const setColor = (props, alpha: number) =>
	props.primary
		? rgba(props.theme.primary || lightTheme.primary, alpha)
		: props.secondary
			? rgba(props.theme.secondary || lightTheme.secondary, alpha)
			: rgba(props.theme.text || lightTheme.text, alpha)

export const ButtonBase = styled.button`
  /**
   * Disables blue background on tap in mobile devices.
   * See:
   * - https://stackoverflow.com/a/29961714
   * - #32
   */
  -webkit-tap-highlight-color: transparent;

  position: relative;
	display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  border: none;
  outline: none;
  min-height: 36px;
  min-width: 64px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  user-select: none;
  letter-spacing: 1px;
	fill: currentColor;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
	}
`
