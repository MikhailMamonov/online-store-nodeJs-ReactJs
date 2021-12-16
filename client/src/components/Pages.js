import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";
const Pages = observer((props) => {
  const { device } = useContext(Context);
  let pages = [];
  const pageCount = Math.ceil(device.totalCount / device.limit);

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <div>
      <Pagination>
        {pages.map((page) => (
          <Pagination.Item
            active={device.currentPage === page}
            onClick={() => device.setCurrentPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
});

export default Pages;
