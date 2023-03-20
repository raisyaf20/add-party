import React from "react";
const List: React.FC<DataState> = ({ people }) => {
  return (
    <main className="mt-16">
      <div className="container mx-auto">
        <section>
          <div className="grid justify-center ">
            <div className="w-[24rem] sm:w-[40rem] lg:w-[1000px]">
              <table className="w-full text-center p-2 table-auto">
                <thead>
                  <tr>
                    <td className="bg-slate-200">#</td>
                    <td className="bg-slate-200">Name</td>
                    <td className="bg-slate-200">Age</td>
                    <td className="bg-slate-200">Notes</td>
                    <td className="bg-slate-200">Image</td>
                  </tr>
                </thead>
                <tbody>
                  {people.map((e, i) => {
                    return (
                      <tr key={i}>
                        <td>{i++}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.note}</td>
                        <td>
                          <img
                            src={e.url}
                            alt={e.name}
                            className="block mx-auto w-16"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default List;
