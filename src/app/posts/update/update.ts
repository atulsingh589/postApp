export class Post {
    public _id: String = "";
    public title: String = "";
    public description: String = "";
    public media: media = new media();
    public targetDate: String = "";
    public scheduleDate: string = "";
    public accountDetail: String = "";
}
export class media {
    public file_id: string = ""
    public file_type: string = ""
}
