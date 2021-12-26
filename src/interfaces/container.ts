export enum ContainerStatus {
    notCreated,
    onCreating,
    created,
    onDeleting
}

export default interface Container {
    id: number;
    name: string;
    status: ContainerStatus
}