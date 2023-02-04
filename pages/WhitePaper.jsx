import Breadcrumb from "@components/BreadCrumb/Breadcrumb";
import React from "react";

const WhitePaper = () => {
  return (
    <div >
      <Breadcrumb
        PageName={"WhitePaper"}
        Previous={"Home"}
        Current={"WhitePaper"}
      />
      <div class="container-fluid mx-auto px-5 px-md-10">
        <div class="mb-16">
          <div class="d-flex justify-content-center p-3">
            <span class="text-2xl font-weight-bold text-primary">
              White Paper - Rise Artist Collective Dao - Polygon / Matic
              Blockchain
            </span>
          </div>
          <p class="px-3 py-1">
            "At Rise Artist Collective and the Rise Eco Platform, our mission is
            to create better blockchain Web3 communities one neighborhood at a
            time. We are a diverse community of philanthropists, scientists,
            content creators, artists, engineers, musicians, environmentalists,
            educators, financial experts, humanitarian leaders,
            conservationists, and more, united in our commitment to finding
            real-world solutions to the challenges facing our humanity. We
            believe in equal opportunity and equal voice for all members, and
            value contributions to the community above all else. Through the
            Rise Eco Platform, we aim to provide guidance and secure solutions
            to help individuals and organizations transition to the future of
            Web3. Together, we strive to rise above the limitations of the
            current paradigm and create a better future for all."
          </p>
        </div>
        <hr class="my-8  border-0 border-top border-gray-200 dark:border-gray-700" />
        <div class="mb-8 " >
          <ul class="d-flex flex-column justify-content-start align-items-start text">
            <li class="font-italic">Rise Artist Collective</li>
            <li class="font-italic">Rise Eco PlatForm</li>
            <li class="font-italic">A Division Of</li>
            <li class="font-weight-bold">Rise Above Limited Liability Co.</li>
            <li class="font-weight-bold">All Rights Reserved 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
