// import { motion } from "framer-motion";
import careerData from "../../data/career.json";

import SectionLayout from "../../components/UI/SectionLayout/SectionLayout";
import Career from "../../components/Career/Career";

export default function CareerSection() {
  return (
    <SectionLayout title="CAREER">
      <Career data={careerData} />
    </SectionLayout>
  );
}
