export type Msg = {
    id: number,
    msg: string,
    type: "msg",
    nextid: NextId
};

export type Choice = {
    id: number,
    type: "choice",
    options: Option[],
};

export type Option = {
    text: string,
    nextid: NextId,
    set?: Condition,
};

export type Delay = {
    id: number,
    type: "delay",
    duration : number,
    nextid: NextId,
};

export type NextId = {
    conditional?: {
        id: number,
        conditions: Condition,
    }[], 
    default: {
        id: number,
    },
};

export type Condition = {
    [key: string]: boolean,
};

export type End = {
    id: number,
    type: "end",
};

export type Node = Msg | Choice | Delay | End;
