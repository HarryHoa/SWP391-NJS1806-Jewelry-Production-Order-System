﻿using Repositories.Models;

namespace Repositories
{
    public class OriginalMetalRepository
    {
        private JeweleryOrderProductionContext _context;
        public List<Metal> GetAllMetals()
        {
            _context = new JeweleryOrderProductionContext();
            return _context.Metals.ToList();
        }
    }
}
