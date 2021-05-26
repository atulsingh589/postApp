export class List {
    public _id: String = "";
    public title: String = "";
    public description: String = "";
    public media: Array<media> = [new media()];
    public targetDate: String = "";
    public scheduleDate: String = "";
    public accountDetail: String = "";
}
export class media {
    public file_id: string = ""
    public file_type: string = ""
}
