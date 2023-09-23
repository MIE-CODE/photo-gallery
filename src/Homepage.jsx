import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import AuthDetails from "./AuthDetails";
import { auth } from "./config/firebase";
import { signOut } from "firebase/auth";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableImage = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex sm:flex sm:36 justify-center  items-center relative h-[600px] w-[400px] min-w-[200px] rounded-xl bg-gradient-to-b to-gray-200 from-gray-800 hover:opacity-75 hover:drop-shadow-2xl "
    >
      <img
        src={item.url}
        alt=""
        className="rounded-2xl object-cover w-full h-full "
      />

      <p className="bg-gradient-to-t  select-none from-gray-900 hover:bg-gray-950 bg-transparent bottom-0 ml-32 rounded-xl w-[200px] mb-5 pl-5 h-7  absolute text-stone-400 flex items-center">
        {item.tag}
      </p>
    </div>
  );
};

function Homepage() {
  // const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [image, setImage] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Fashion",
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Food",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVsYXRpb25zaGlwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tag: "# Relationship",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Car",
    },
    {
      id: 5,
      url: "https://plus.unsplash.com/premium_photo-1682089706055-d5ef14dc14e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Dance",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tag: "# Classroom",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Sport",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# House",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Football",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# Technology",
    },
    {
      id: 11,
      url: "https://media.istockphoto.com/id/999093130/photo/enjoying-engineering-class.webp?b=1&s=170667a&w=0&k=20&c=Derre2BEASm1MKipOXhT7J38c3pZWxSWSLgzogOTxh8=",
      tag: "# Internship",
    },
    {
      id: 12,
      url: "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tag: "# Nature",
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tag: "# Flower",
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1584719866406-c76ddee48493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWd5cHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      tag: "# History",
    },
    {
      id: 15,
      url: "https://plus.unsplash.com/premium_photo-1678834890197-f48a6837ae46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      tag: "# Knowlegde",
    },
    {
      id: 16,
      url: "https://media.istockphoto.com/id/1409763583/photo/young-salesman-working-on-a-digital-tablet-at-a-garden-center.jpg?s=612x612&w=0&k=20&c=fbE7dtpBRDeA7CWx3pUCoEG4MiwZtjpipiaJcxJOVeg=",
      tag: "# Entrepreneur",
    },
  ]);
  const [filtered, setFiltered] = useState(null);
  function handleSearchChange() {
    let text = event.target.value;
    setSearchValue(text);
    setFiltered(
      image.filter((filter) =>
        filter.tag.toLowerCase().includes(text.toLowerCase())
      )
    );
  }
  let images = filtered ? filtered : image;

  console.log(filtered);
  console.log(searchValue);
  const navigateTo = useNavigate();
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out was successful");
        navigateTo("/signin");
      })
      .catch((error) => console.log(error));
  };
  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setImage((images) => {
      const oldIndex = images.findIndex((image) => image.id === active.id);
      const newIndex = images.findIndex((image) => image.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };
  return (
    <div className="w-screen r flex flex-col sm md xl 2xl  items-center bg-gradient-to-b to-gray-200 from-gray-800">
      <header className=" fixed ">
        <div className="  h-32 w-screen items-center  border-b-yellow-600 border-b-[0.4px] flex justify-between ">
          <div className="flex items-center gap-10px ">
            <div className="bg-[url('./src/images/logo-no-background.svg')] bg-contain bg-no-repeat w-[300px] h-20 flex bg-center"></div>
          </div>

          <h1 className="select-none text-5xl gap-2 font-bold flex items-center justify-center text-center">
            Photo{" "}
            <span className="select-none border-l-yellow-600 text-yellow-100 border-l-[0.4px] pl-2">
              {" "}
              Gallery
            </span>
          </h1>
          <button
            onClick={userSignOut}
            className="  mr-10 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110  duration-300 h-[48px] w-[200px]  text-teal-50 font-bold rounded hover:bg-gray-500 hover:border hover:text-white mt-0"
          >
            <p>Log out</p>
          </button>
        </div>
      </header>
      <section className="fixed">
        <form>
          <input
            type="search"
            name=""
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search Image With Tag"
            className="border outline-none rounded-xl  bg-transparent mt-[150px] text-stone-200 font-bold p-4 text-2xl w-[1256px] h-16 flex justify-center text-center "
          />
        </form>
      </section>
      <main className="backdrop-blur-md bg-white/30 flex flex-col gap-8 mt-[300px] sm:grid-cols-2">
        <div className="grid  xl 2xl grid-cols-4 justify-between items-center gap-10 w-screen p-10">
          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={images} strategy={rectSwappingStrategy}>
              {images.map((item) => (
                <SortableImage key={item.id} item={item} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </main>
      <footer className="border-t-yellow-600 border-t-[0.4px]">
        <p className="mt-2 mb-5 font-extrabold select-none">
          © 2023 Photo Gallery by M'I'E{" "}
        </p>
      </footer>
    </div>
  );
}

export default Homepage;
