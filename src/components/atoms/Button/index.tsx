import { FC } from 'react'
import { useTranslation, Trans } from 'react-i18next'

export const Button: FC<{ label?: string; onClick?: () => void }> = (props) => {
  const { t } = useTranslation()
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
      {t('Default text')}
      <Trans>Demo</Trans>
      <Trans>{t('aaasdfwewerwer')}</Trans>
    </button>
  )
}
