using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace HandicapCalc
{
    public partial class GolfCourse
    {
        [Key]
        [Column("CourseID")]
        public int CourseId { get; set; }
        [StringLength(250)]
        [Unicode(false)]
        public string CourseName { get; set; } = null!;
        [StringLength(100)]
        [Unicode(false)]
        public string? CourseType { get; set; }
        public int Holes { get; set; }
        [StringLength(250)]
        [Unicode(false)]
        public string? CourseAddress { get; set; }
        [StringLength(25)]
        [Unicode(false)]
        public string? AccessLevel { get; set; }
        [StringLength(10)]
        [Unicode(false)]
        public string? HasDrivingRange { get; set; }
        public int? SignatureHole { get; set; }
        public int? YardageTee1 { get; set; }
        public int? YardageTee2 { get; set; }
        public int? YardageTee3 { get; set; }
        public int? YardageTee4 { get; set; }
        public int? YardageTee5 { get; set; }
        public int? YardageTee6 { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? CourseRating1 { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? CourseRating2 { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? CourseRating3 { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? CourseRating4 { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? CourseRating5 { get; set; }
        [Column(TypeName = "decimal(18, 0)")]
        public decimal? CourseRating6 { get; set; }
        [Column("WRating1", TypeName = "decimal(18, 0)")]
        public decimal? Wrating1 { get; set; }
        [Column("WRating2", TypeName = "decimal(18, 0)")]
        public decimal? Wrating2 { get; set; }
        [Column("WRating3", TypeName = "decimal(18, 0)")]
        public decimal? Wrating3 { get; set; }
        [Column("WRating4", TypeName = "decimal(18, 0)")]
        public decimal? Wrating4 { get; set; }
        [Column("WRating5", TypeName = "decimal(18, 0)")]
        public decimal? Wrating5 { get; set; }
        [Column("WRating6", TypeName = "decimal(18, 0)")]
        public decimal? Wrating6 { get; set; }
        public int? Slope1 { get; set; }
        public int? Slope2 { get; set; }
        public int? Slope3 { get; set; }
        public int? Slope4 { get; set; }
        public int? Slope5 { get; set; }
        public int? Slope6 { get; set; }
        [Column("WSlope1")]
        public int? Wslope1 { get; set; }
        [Column("WSlope2")]
        public int? Wslope2 { get; set; }
        [Column("WSlope3")]
        public int? Wslope3 { get; set; }
        [Column("WSlope4")]
        public int? Wslope4 { get; set; }
        [Column("WSlope5")]
        public int? Wslope5 { get; set; }
        [Column("WSlope6")]
        public int? Wslope6 { get; set; }
        public int? MensPar1 { get; set; }
        public int? MensPar2 { get; set; }
        public int? MensPar3 { get; set; }
        public int? MensPar4 { get; set; }
        public int? MensPar5 { get; set; }
        public int? MensPar6 { get; set; }
        [Column("WPar1")]
        public int? Wpar1 { get; set; }
        [Column("WPar2")]
        public int? Wpar2 { get; set; }
        [Column("WPar3")]
        public int? Wpar3 { get; set; }
        [Column("WPar4")]
        public int? Wpar4 { get; set; }
        [Column("WPar5")]
        public int? Wpar5 { get; set; }
        [Column("WPar6")]
        public int? Wpar6 { get; set; }
        [Column(TypeName = "money")]
        public decimal? GreenFee18 { get; set; }
        [Column(TypeName = "money")]
        public decimal? GreenFee9 { get; set; }
        [Column(TypeName = "money")]
        public decimal? GreenFeeTwilight18 { get; set; }
        [Column(TypeName = "money")]
        public decimal? GreenFeeTwilight9 { get; set; }
        [Column(TypeName = "money")]
        public decimal? GreenFeeNightHawk { get; set; }
    }
}
