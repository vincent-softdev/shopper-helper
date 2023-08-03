// components/Pagination.tsx
interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
  }
  
  const PageController: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {pages.map(page => (
          <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}>
            {page}
          </button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };
  
  export default PageController;