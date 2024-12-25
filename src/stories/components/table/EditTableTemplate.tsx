import { HeaderLayoutProvider } from "@/components/header-layout";
// import { CustomDropdown } from "@/components/table/components/CustomDropdown";
import EditableDataGrid from "@/components/table/components/CustomEdit";

const EditTableTemplate = () => {
  // return <CustomDropdown />
  return <EditableDataGrid />;
};

const WrapperEditTableTemplate = () => {
  return (
    <HeaderLayoutProvider>
      <EditTableTemplate />
    </HeaderLayoutProvider>
  );
};

export default WrapperEditTableTemplate;
