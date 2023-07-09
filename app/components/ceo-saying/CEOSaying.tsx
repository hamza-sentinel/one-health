import Image from "next/image"

function CEOSaying() {
  return (
    <section className="container flex justify-center flex-col mt-6 sm:flex-row sm:gap-8 sm:items-center">
        <Image src="/ceo.jpg" alt="CEO" width={320} height={320} className="w-full aspect-square object-cover rounded sm:rounded-full" />
        <div className="content">
            <p className="text-sm text-gray-500 mt-2">Founder &amp; CEO</p>
            <h3 className="text-2xl text-gray-900 font-bold mt-2">Sarah Dessica</h3>
            <p className="text-gray-800 mt-2 leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur voluptates sint voluptate illum delectus exercitationem illo enim quidem minima nulla laboriosam obcaecati, quas, beatae quos. Rerum, praesentium? Sit, repellendus?
            </p>
        </div>
    </section>
  )
}

export default CEOSaying