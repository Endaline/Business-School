import Image from "next/image";
export default function Home() {
  interface Tab {
    image: string;
    content: string;
  }

  const tabs: Tab[] = [
    { image: "/images/camera.jpeg", content: "content1" },
    // { image: "/images/chesse.jpeg", content: "content2" },
    // Add more tabs as needed
  ];

  return (
    <main>
      <div className="flex">
        {tabs.map((tab, index) => (
          <div key={index}>
            <Image
              src={tab.image}
              alt={`Tab ${index + 1}`}
              width={400}
              height={600}
              className="w-full h-full object-contain"></Image>
            <p>{tab.content}</p>
          </div>
        ))}

        {/* <p>
          2024 God will surly come through for me,wisdom and understanding is
          mine,I must surly make it in the programing world, because God is with
          me Amen.
        </p> */}
      </div>
    </main>
  );
}
