import React from "react";
interface TableType {
  className: string;
}
const NavidTable = (props: TableType) => {
  const { className } = props;
  return (
    <div>
      <table className={className}>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
};
export { NavidTable };
