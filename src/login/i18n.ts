import { createUseI18n } from "keycloakify/login";

export const { useI18n, ofTypeI18n } = createUseI18n({
    ru: {
        confirmExecutionOfActions: "Выполните следующие действия ",
        "requiredAction.UPDATE_PASSWORD": "Обновление пароля",
        proceedWithAction: "&raquo; Нажмите здесь чтобы перейти",
        resetPasswordMessage: "Необходимо установить новый пароль",
        expiredActionMessage: "Действие истекло. Пожалуйста, продолжите вход.",
        expiredActionTokenNoSessionMessage: "Действие истекло.",
        expiredActionTokenSessionExistsMessage: "Действие истекло. Пожалуйста, начните сначала.",
    }
});

export type I18n = typeof ofTypeI18n;
