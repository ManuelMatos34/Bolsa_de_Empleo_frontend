import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/Footer";
import SkillsAdmin from "../../components/admins/SkillsAdmin";
import FilterSkills from "../../components/admins/FilterSkills";
import { filterSkills } from "../../helpers/Helpers";
import { getAllSkills, getSkillById } from "../../services/services";
import AdminModals from "../../components/admins/modals/AdminModals";

const SkillsPage = () => {
  const [data, setData] = useState(null);
  const [skillNameFilter, setSkillNameFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [carFilter, setCarFilter] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        let getResponse = await getAllSkills();
        let response = getResponse.data;
        setData(
          filterSkills(response, skillNameFilter, stateFilter, carFilter)
        );
      } catch (error) {
        // Manejo de errores
        setData(null);
      }
    };
    getSkills();
  }, [skillNameFilter, stateFilter, carFilter]);

  const getSkill = async (id) => {
    try {
      let getResponse = await getSkillById(id);
      let response = getResponse.data;
      setSelected(response);
    } catch (error) {
      // Manejo de errores
      setSelected(null);
    }
  };

  return (
    <div>
      <AdminModals data={data} selected={selected} />
      <Header />
      <div className="container-fluid mt-3">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 right-col-size">
            <div className="mt-2">
              <FilterSkills
                skillNameFilter={skillNameFilter}
                setSkillNameFilter={setSkillNameFilter}
                stateFilter={stateFilter}
                setStateFilter={setStateFilter}
                carFilter={carFilter}
                setCarFilter={setCarFilter}
              />
            </div>
            <div className="mt-1">
              <SkillsAdmin data={data} getSkill={getSkill}/>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
