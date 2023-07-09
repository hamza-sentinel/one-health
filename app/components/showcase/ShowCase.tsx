import DisplayCard from "./DisplayCard"

export default function ShowCase() {
    const cards = [
        {
            title: "Our Vision",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolores ad accusamus, possimus totam velit placeat in rerum quia, quisquam sint excepturi accusantium consectetur incidunt est non libero quae recusandae. Nisi, sapiente ea. Dolorum, ex?",
            image: "/vision.jpg",
        },
        {
            title: "Our Mission",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolores ad accusamus, possimus totam velit placeat in rerum quia, quisquam sint excepturi accusantium consectetur incidunt est non libero quae recusandae. Nisi, sapiente ea. Dolorum, ex?",
            image: "/mission.jpg",
        },
        {
            title: "Objectives",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolores ad accusamus, possimus totam velit placeat in rerum quia, quisquam sint excepturi accusantium consectetur incidunt est non libero quae recusandae. Nisi, sapiente ea. Dolorum, ex?",
            image: "/objective.jpg",
        },
    ]

    return (
        <section className="container sm:px-8">
            {cards.map(
                (card, index) => (<DisplayCard key={index} {...card} />)
            )}
            <hr className="mt-3" />
        </section>
    )
}