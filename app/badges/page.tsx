import BadgeList from "@/components/badge-list/BadgeList";
import SinglePageLayout from "@/components/layout/SinglePageLayout";
import React from "react";

type BadgePageProps = {};
const BadgePage: React.FC<BadgePageProps> = () => {
  return (
    <div className="page">
      <SinglePageLayout>
        <BadgeList />
      </SinglePageLayout>
    </div>
  );
};

export default BadgePage;
