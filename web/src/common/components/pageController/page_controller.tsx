import { Pagination } from '@mui/material';
import './page_controller.css'
import React from 'react';
// components/Pagination.tsx
interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
  }
  
  const PageController: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      onPageChange(value);
    };
  
    return <Pagination count={pages.length} page={page} onChange={handleChange} />;
  };
  
  export default PageController;