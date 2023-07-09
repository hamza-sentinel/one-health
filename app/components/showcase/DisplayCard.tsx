import Image from 'next/image'

const DisplayCard = ({
    title, 
    description, 
    image
}: {
    title: string;
    description: string;
    image: string;
}) => {

  return (
    <article className="display-card flex flex-col justify-center w-full h-full py-4 gap-4 sm:flex-row sm:gap-x-6 sm:items-center sm:mb-8">
        <Image src={image} alt={title} className="w-full object-cover rounded-md" width={640} height={427} />
        <div className="content">
            <h3 className="text-3xl mb-3">{title}</h3>
            <p className="leading-normal">{description}</p>
        </div>
    </article>
  )
}

export default DisplayCard