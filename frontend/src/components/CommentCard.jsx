export default function CommentCard({comment_text, username}){

    return (
        <section>
            <h4>{username}</h4>
            <p>{comment_text}</p>
        </section>
    )
}