interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullEmployee: boolean;
    yearsOfExprience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [propName: string]: any;
}