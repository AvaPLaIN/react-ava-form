declare const useForm: () => {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {};
    register: (id: string, defaultValue?: string) => {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        defaultValue: string | undefined;
    };
    unregister: (id: string) => void;
    getFormValues: () => {};
};
export default useForm;
//# sourceMappingURL=useForm.d.ts.map