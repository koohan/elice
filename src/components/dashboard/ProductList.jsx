import React from 'react';
import { Table, TableHeader, TableHeaderImg, TableCell, TableCellImg, TableRow, ImagePlaceholder, ActionButton } from './styles/ProductLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductList = ({ productList }) => (
  <div style={{ width: '100%', overflowX: 'auto' }}>
    <Table>
      <thead>
        <TableRow>
          <TableHeaderImg>이미지</TableHeaderImg>
          <TableHeader>이름</TableHeader>
          <TableHeader>브랜드</TableHeader>
          <TableHeader>카테고리</TableHeader>
          <TableHeader>가격</TableHeader>
          <TableHeader>정보 수정</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {productList.map((product) => (
          <TableRow key={product.id}>
            <TableCellImg><ImagePlaceholder /></TableCellImg>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>
              <ActionButton>
                <FontAwesomeIcon icon={faEdit} /> 수정
              </ActionButton>
              <ActionButton>
                <FontAwesomeIcon icon={faTrash} /> 삭제
              </ActionButton>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div>
);

export default ProductList;
