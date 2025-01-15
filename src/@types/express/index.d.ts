declare namespace Express{
    //adicionando o id no request
    export interface Request{
        user_id: string;
    }
}