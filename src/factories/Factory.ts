export interface Factory<T> {
    create(data: any): T;
}
