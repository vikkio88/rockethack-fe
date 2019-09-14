export const LANGUAGE_CHANGED = 'language_changed';


export const languageChanged = lang => {
    return {
        type: LANGUAGE_CHANGED,
        data: {
            lang
        }
    };
}