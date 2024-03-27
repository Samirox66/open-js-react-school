import Css from "./User.module.css";
import { useGetUserByIdQuery } from "../../app/apis/usersApi";
import { Loader } from "..";

interface UserProps {
    userId?: number;
}

export default function User({ userId }: UserProps) {
    const {
        isLoading: isUserLoading,
        data: user,
        isError,
    } = useGetUserByIdQuery(userId);

    if (isUserLoading) return <Loader isLoading={isUserLoading} />;

    if (isError) return <p>Error</p>;

    return (
        <div className={Css.user}>
            <img className={Css.image} src={user?.image} />
            <div className={Css.nameContainer}>
                <p className={Css.writtenBy}>Written by</p>
                <p
                    className={Css.userName}
                >{`${user?.firstName} ${user?.lastName}`}</p>
            </div>
        </div>
    );
}
