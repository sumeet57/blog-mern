import React from "react";

const Home_Section = () => {
  return (
    <>
      <section className="w-[80%] float-right h-screen bg-[var(--main)] overflow-y-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <div key={item} className="box bg-[var(--pri)] m-2 p-4 rounded-md">
              <h4 className="text-xl">heading of blog</h4>
              <p className="py-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                earum! Deleniti, veniam voluptatem. Quo non eos veritatis nam
                voluptatum! Doloribus reiciendis beatae ipsa quasi veritatis
                sequi laudantium fugiat aliquid! Praesentium.
              </p>
              <hr className="mt-2 mb-2 border-[var(--text)]" />
              <div className="flex gap-4">
                <p>50 likes</p>
                <p>450 views</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Home_Section;
