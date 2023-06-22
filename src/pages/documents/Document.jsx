import React from "react";
import DocumentFilter from "../../components/Filter/DocumentFilter";
import UserFilter from "../../components/Filter/UserFilter";
import Navbar from "../../components/layout/Navbar/Navbar";
import Table from "../../components/Table/Table";
import Graphics from "../../components/Graphics/Graphics";
import ExpandableTableUser from "../../components/Expandable/ExpandableTableUser";
import ExpandableTableDocument from "../../components/Expandable/ExpandableTableDocument";
import Consumption from "../../components/Consumption/Consumption";
import Transaction from "../../components/Transaction/Transaction";
import { filterByTabs } from "../../services/filterService";
import { useFetch } from "../../hooks/useFetch";
import { useActiveTab } from "../../hooks/useActiveTab";
import { useFilter } from "../../hooks/useFilter";
import { tableUrl, columns, TABS } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import {
  StyledContainer,
  StyledContainerGroupTable,
  StyledContainerTable,
  StyledCointanerList,
  StyledUl,
  StyledLi,
} from "../../styles/pages/DocumentStyles";

function Document() {
  const {
    filterText,
    setFilterText,
    startDate,
    setStartDate,
    finishDate,
    setFinishDate,
    typeDate,
    setTypeDate,
  } = useFilter();
  const { activeTab, getTabClassName, setActive } = useActiveTab(TABS.USER);
  const { data, loading } = useFetch(tableUrl[activeTab]);
  const [t] = useTranslation("global");


  const getColumnsForTab = (activeTab) => {
    return columns[activeTab];
  };

  const getDataForTab = (activeTab) => {
    return filterByTabs(
      activeTab,
      data,
      filterText,
      startDate,
      finishDate,
      typeDate
    );
  };

  const getExpandableComponent = (activeTab) => {
    if (activeTab === "document") return ExpandableTableDocument;
    if (activeTab === "user") return ExpandableTableUser;
    return null;
  };

  function renderComponentByTab(activeTab) {
    switch (activeTab) {
      case TABS.CONSUMPTION:
        return (
          <Consumption
            boughtFirms={data.bought_firms}
            usedFirms={data.used_firms}
            totalDocuments={data.total_documents}
          />
        );
      case TABS.REPORTS:
        return (
          <Graphics/>
        );
      case TABS.TRANSACTION:
        return (
          <Transaction />
        );


      default:
        return (
          <Table
            columns={getColumnsForTab(activeTab)}
            data={getDataForTab(activeTab)}
            subHeaderComponent={subHeaderComponentMemo}
            expandableComponent={getExpandableComponent(activeTab)}
          />
        );
    }
  }

  const subHeaderComponentMemo = React.useMemo(() => {
    if (activeTab === "document") {
      return (
        <>
          <DocumentFilter
            filterText={filterText}
            setFilterText={setFilterText}
            startDate={startDate}
            setStartDate={setStartDate}
            finishDate={finishDate}
            setFinishDate={setFinishDate}
            typeDate={typeDate}
            setTypeDate={setTypeDate}
          />
        </>
      );
    } else {
      return (
        <>
          <UserFilter filterText={filterText} setFilterText={setFilterText} />
        </>
      );
    }
  }, [activeTab, filterText, startDate, finishDate, typeDate]);

  return (
    <>
      <Navbar />
      <StyledContainer>
        <StyledContainerGroupTable>
          <StyledCointanerList>
            <StyledUl>
              <StyledLi
                className={getTabClassName(TABS.USER)}
                onClick={() => setActive(TABS.USER)}
              >
                <p>{t("reports.users")}</p>
              </StyledLi>
              <StyledLi
                className={getTabClassName(TABS.DOCUMENT)}
                onClick={() => setActive(TABS.DOCUMENT)}
              >
                <p>{t("reports.documents")}</p>
              </StyledLi>
              <StyledLi
                className={getTabClassName(TABS.TRANSACTION)}
                onClick={() => setActive(TABS.TRANSACTION)}
              >
                <p>{t("reports.transactions")}</p>
              </StyledLi>
              <StyledLi
                className={getTabClassName(TABS.CONSUMPTION)}
                onClick={() => setActive(TABS.CONSUMPTION)}
              >
                <p>{t("reports.consumption")}</p>
              </StyledLi>
              <StyledLi
                className={getTabClassName(TABS.REPORTS)}
                onClick={() => setActive(TABS.REPORTS)}
              >
                <p>{t("reports.reports")}</p>
              </StyledLi>
            </StyledUl>
          </StyledCointanerList>
          <StyledContainerTable>
            {!loading && data && <>{renderComponentByTab(activeTab)}</>}
          </StyledContainerTable>
        </StyledContainerGroupTable>
      </StyledContainer>
    </>
  );
}

export default Document;
