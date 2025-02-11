import cn from "classnames/bind";
import styles from "./AccordionSection.module.scss";

import Accordion from "../../components/Accordion/Accordion";

const cx = cn.bind(styles);

export default function AccordionSection() {
  return (
    <div className={cx("AccordionSection")}>
      {/* Accordion */}
      <Accordion>
        <Accordion.Item id="experience" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            자신의 대해 자유롭게 표현해주세요.
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            저의 가치관은 ‘이해’입니다. 어릴 적부터 상대방의 입장에서 생각하라는
            이야기를 많이 들었습니다. 이 가치관 은 성인이 된 이후에 더욱더
            가치관이 강하게 적립되었습니다.. 그러나 머릿속으로는 알고 있지만
            일상생활에서 적용하기가 쉽지 않았습니다. 이해는 ‘배려와 소통의
            출발선’입니다. 퍼블리셔는 개인 실력도 중요하지만 팀원 들과의 소통
            또한 매우 중요한 직무라고 생각합니다. 팀원들의 생각과 의도를
            이해한다면 배려와 소통은 자연스 레 나오며 그것이 좋은 결과로
            이어지기 때문입니다. 퍼블리셔는 고객이 가장 먼저보는 기업의 얼굴을
            만드는 일이라고 생각합니다. 입사 후 동료, 고객들의 입장에서 이해와
            소통을 통해서 좋은 성과를 목표로 하겠습니다.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item id="local-guides" className="accordion-item">
          <Accordion.Title className="accordion-item-title">
            기술 경향을 파악하고 업무 역량을 강화시키기 위한 본인의 학습방법을
            구체적으로 설명해주세요.
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content">
            저는 부족했던 기술로 토이 프로젝트 만드는 것이 좋습니다. jQuery 만
            사용하여 만들었던 Tagheuer 리뉴얼 프로젝트를 시작으로 DB와
            javascript의 필요성을 느끼고 개별적으로 php와 javascript 공부하여
            Tving 리뉴얼 프로젝트를 만들었습니다. 아직 기술적으로 부족하지만
            하나하나 작품들을 만들어가며 개발에 대한 관심이 증가하였고 현재
            react를 공부하며, 성장형 개발자가 되기 위해 노력하고 있습니다
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
