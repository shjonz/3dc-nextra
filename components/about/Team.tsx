import React from "react";
import { useState, useEffect } from 'react';
import { ExcoCards } from "./ExcoCard";

export default function Team() {
  const [exco,setExco] = useState([])

  useEffect(() => {
    const getMembers= async () => {
      const res = await fetch('https://3dc-nextra-phi.vercel.app/api/members/get')
      const json = await res.json();
      setExco(json);
    };

    getMembers();


  },[exco])

  function ExcoMemberCard() {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  }
  
  return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-left pb-12">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                    Exco
                </h1>
            </div>

                {/* tq for fixing it */}
                <div className="px-4 py-4 overflow-auto grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                  {exco.map((member, key) => (
                    <ExcoCards key={key} {...member} />
                  ))}
                </div>
        </section>
  );
}