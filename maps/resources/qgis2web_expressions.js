// Aggregates

// Color

// Conditionals

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.LN10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_coalesce(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function PrivateUniversitiesPrefecture0rule0_eval_expression(context) {
    // NUMPOINTS = 0

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  == 0);
}


function PrivateUniversitiesPrefecture0rule1_eval_expression(context) {
    // NUMPOINTS > 0 AND NUMPOINTS <= 5

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 0) && (feature.get('NUMPOINTS')  <= 5));
}


function PrivateUniversitiesPrefecture0rule2_eval_expression(context) {
    // NUMPOINTS > 5 AND NUMPOINTS <= 10

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 5) && (feature.get('NUMPOINTS')  <= 10));
}


function PrivateUniversitiesPrefecture0rule3_eval_expression(context) {
    // NUMPOINTS > 10 AND NUMPOINTS <= 19

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 10) && (feature.get('NUMPOINTS')  <= 19));
}


function PrivateUniversitiesPrefecture0rule4_eval_expression(context) {
    // NUMPOINTS >= 20 AND NUMPOINTS <= 75

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  >= 20) && (feature.get('NUMPOINTS')  <= 75));
}


function PrivateUniversitiesPrefecture0rule5_eval_expression(context) {
    // NUMPOINTS > 75 AND NUMPOINTS <= 100

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 75) && (feature.get('NUMPOINTS')  <= 100));
}


function PrivateUniversitiesPrefecture0rule6_eval_expression(context) {
    // NUMPOINTS > 100 AND NUMPOINTS <= 200

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 100) && (feature.get('NUMPOINTS')  <= 200));
}


function PrivateUniversitiesPrefecture0rule7_eval_expression(context) {
    // NUMPOINTS > 200

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  > 200);
}


function PublicUniversitiesPrefecture1rule0_eval_expression(context) {
    // NUMPOINTS = 0

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  == 0);
}


function PublicUniversitiesPrefecture1rule1_eval_expression(context) {
    // NUMPOINTS > 0 AND NUMPOINTS <= 5

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 0) && (feature.get('NUMPOINTS')  <= 5));
}


function PublicUniversitiesPrefecture1rule2_eval_expression(context) {
    // NUMPOINTS > 5 AND NUMPOINTS <= 10

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 5) && (feature.get('NUMPOINTS')  <= 10));
}


function PublicUniversitiesPrefecture1rule3_eval_expression(context) {
    // NUMPOINTS > 10 AND NUMPOINTS <= 25

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 10) && (feature.get('NUMPOINTS')  <= 25));
}


function PublicUniversitiesPrefecture1rule4_eval_expression(context) {
    // NUMPOINTS > 25 AND NUMPOINTS <= 50

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 25) && (feature.get('NUMPOINTS')  <= 50));
}


function PublicUniversitiesPrefecture1rule5_eval_expression(context) {
    // NUMPOINTS > 50 AND NUMPOINTS <= 75

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 50) && (feature.get('NUMPOINTS')  <= 75));
}


function PublicUniversitiesPrefecture1rule6_eval_expression(context) {
    // NUMPOINTS > 75 AND NUMPOINTS <= 100

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 75) && (feature.get('NUMPOINTS')  <= 100));
}


function PublicUniversitiesPrefecture1rule7_eval_expression(context) {
    // NUMPOINTS > 100

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  > 100);
}


function QingExamTakersPrefecture2rule0_eval_expression(context) {
    // NUMPOINTS = 0

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  == 0);
}


function QingExamTakersPrefecture2rule1_eval_expression(context) {
    // NUMPOINTS > 0 AND NUMPOINTS <= 10

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 0) && (feature.get('NUMPOINTS')  <= 10));
}


function QingExamTakersPrefecture2rule2_eval_expression(context) {
    // NUMPOINTS > 10 AND NUMPOINTS <= 25

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 10) && (feature.get('NUMPOINTS')  <= 25));
}


function QingExamTakersPrefecture2rule3_eval_expression(context) {
    // NUMPOINTS > 25 AND NUMPOINTS <= 50

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 25) && (feature.get('NUMPOINTS')  <= 50));
}


function QingExamTakersPrefecture2rule4_eval_expression(context) {
    // NUMPOINTS > 50 AND NUMPOINTS <= 75

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 50) && (feature.get('NUMPOINTS')  <= 75));
}


function QingExamTakersPrefecture2rule5_eval_expression(context) {
    // NUMPOINTS > 75 AND NUMPOINTS <= 100

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 75) && (feature.get('NUMPOINTS')  <= 100));
}


function QingExamTakersPrefecture2rule6_eval_expression(context) {
    // NUMPOINTS > 100 AND NUMPOINTS <= 200

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 100) && (feature.get('NUMPOINTS')  <= 200));
}


function QingExamTakersPrefecture2rule7_eval_expression(context) {
    // NUMPOINTS > 200

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  > 200);
}


function MingExamTakersPrefecture3rule0_eval_expression(context) {
    // NUMPOINTS = 0

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  == 0);
}


function MingExamTakersPrefecture3rule1_eval_expression(context) {
    // NUMPOINTS > 0 AND NUMPOINTS <= 5

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 0) && (feature.get('NUMPOINTS')  <= 5));
}


function MingExamTakersPrefecture3rule2_eval_expression(context) {
    // NUMPOINTS > 5 AND NUMPOINTS <= 10

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 5) && (feature.get('NUMPOINTS')  <= 10));
}


function MingExamTakersPrefecture3rule3_eval_expression(context) {
    // NUMPOINTS > 10 AND NUMPOINTS <= 25

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 10) && (feature.get('NUMPOINTS')  <= 25));
}


function MingExamTakersPrefecture3rule4_eval_expression(context) {
    // NUMPOINTS > 25 AND NUMPOINTS <= 50

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 25) && (feature.get('NUMPOINTS')  <= 50));
}


function MingExamTakersPrefecture3rule5_eval_expression(context) {
    // NUMPOINTS > 50 AND NUMPOINTS <= 75

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 50) && (feature.get('NUMPOINTS')  <= 75));
}


function MingExamTakersPrefecture3rule6_eval_expression(context) {
    // NUMPOINTS > 75 AND NUMPOINTS <= 100

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 75) && (feature.get('NUMPOINTS')  <= 100));
}


function MingExamTakersPrefecture3rule7_eval_expression(context) {
    // NUMPOINTS > 100

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  > 100);
}


function NorthernSongExamTakersPrefecture4rule0_eval_expression(context) {
    // NUMPOINTS = 0

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  == 0);
}


function NorthernSongExamTakersPrefecture4rule1_eval_expression(context) {
    // NUMPOINTS > 0 AND NUMPOINTS <= 10

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 0) && (feature.get('NUMPOINTS')  <= 10));
}


function NorthernSongExamTakersPrefecture4rule2_eval_expression(context) {
    // NUMPOINTS > 10 AND NUMPOINTS <= 25

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 10) && (feature.get('NUMPOINTS')  <= 25));
}


function NorthernSongExamTakersPrefecture4rule3_eval_expression(context) {
    // NUMPOINTS > 25 AND NUMPOINTS <= 50

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 25) && (feature.get('NUMPOINTS')  <= 50));
}


function NorthernSongExamTakersPrefecture4rule4_eval_expression(context) {
    // NUMPOINTS > 50 AND NUMPOINTS <= 75

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 50) && (feature.get('NUMPOINTS')  <= 75));
}


function NorthernSongExamTakersPrefecture4rule5_eval_expression(context) {
    // NUMPOINTS > 75 AND NUMPOINTS <= 100

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 75) && (feature.get('NUMPOINTS')  <= 100));
}


function NorthernSongExamTakersPrefecture4rule6_eval_expression(context) {
    // NUMPOINTS > 100 AND NUMPOINTS <= 200

    var feature = context.feature;
    
    return ((feature.get('NUMPOINTS')  > 100) && (feature.get('NUMPOINTS')  <= 200));
}


function NorthernSongExamTakersPrefecture4rule7_eval_expression(context) {
    // NUMPOINTS > 200

    var feature = context.feature;
    
    return (feature.get('NUMPOINTS')  > 200);
}


function PrivateUniversitiesCity5rule0_eval_expression(context) {
    // count = 1 AND city <> 'Beijing'

    var feature = context.feature;
    
    return ((feature.get('count')  == 1) && (feature.get('city')  != 'Beijing'));
}


function PrivateUniversitiesCity5rule1_eval_expression(context) {
    // count > 1 AND count <= 25 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 1) && (feature.get('count')  <= 25)) && (feature.get('city')  != 'Beijing'));
}


function PrivateUniversitiesCity5rule2_eval_expression(context) {
    // count > 25 AND count <= 50 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 25) && (feature.get('count')  <= 50)) && (feature.get('city')  != 'Beijing'));
}


function PrivateUniversitiesCity5rule3_eval_expression(context) {
    // count > 50 AND count <= 75 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 50) && (feature.get('count')  <= 75)) && (feature.get('city')  != 'Beijing'));
}


function PrivateUniversitiesCity5rule4_eval_expression(context) {
    // count > 75 AND count <= 100 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 75) && (feature.get('count')  <= 100)) && (feature.get('city')  != 'Beijing'));
}


function PrivateUniversitiesCity5rule5_eval_expression(context) {
    // count > 100 AND city <> 'Beijing'

    var feature = context.feature;
    
    return ((feature.get('count')  > 100) && (feature.get('city')  != 'Beijing'));
}


function PrivateUniversitiesCity5rule6_eval_expression(context) {
    // city = 'Beijing'

    var feature = context.feature;
    
    return (feature.get('city')  == 'Beijing');
}


function PublicUniversitiesCity6rule0_eval_expression(context) {
    // count = 1 AND city <> 'Beijing'

    var feature = context.feature;
    
    return ((feature.get('count')  == 1) && (feature.get('city')  != 'Beijing'));
}


function PublicUniversitiesCity6rule1_eval_expression(context) {
    // count > 1 AND count <= 25 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 1) && (feature.get('count')  <= 25)) && (feature.get('city')  != 'Beijing'));
}


function PublicUniversitiesCity6rule2_eval_expression(context) {
    // count > 25 AND count <= 50 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 25) && (feature.get('count')  <= 50)) && (feature.get('city')  != 'Beijing'));
}


function PublicUniversitiesCity6rule3_eval_expression(context) {
    // count > 50 AND count <= 75 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 50) && (feature.get('count')  <= 75)) && (feature.get('city')  != 'Beijing'));
}


function PublicUniversitiesCity6rule4_eval_expression(context) {
    // count > 75 AND count <= 100 AND city <> 'Beijing'

    var feature = context.feature;
    
    return (((feature.get('count')  > 75) && (feature.get('count')  <= 100)) && (feature.get('city')  != 'Beijing'));
}


function PublicUniversitiesCity6rule5_eval_expression(context) {
    // count > 100 AND city <> 'Beijing'

    var feature = context.feature;
    
    return ((feature.get('count')  > 100) && (feature.get('city')  != 'Beijing'));
}


function PublicUniversitiesCity6rule6_eval_expression(context) {
    // city = 'Beijing'

    var feature = context.feature;
    
    return (feature.get('city')  == 'Beijing');
}


function QingExamTakersCity7rule0_eval_expression(context) {
    // xy_count = 1 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return ((feature.get('xy_count')  == 1) && (feature.get('AddrName')  != 'Daxing'));
}


function QingExamTakersCity7rule1_eval_expression(context) {
    // xy_count > 1 AND xy_count <= 25 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  > 1) && (feature.get('xy_count')  <= 25)) && (feature.get('AddrName')  != 'Daxing'));
}


function QingExamTakersCity7rule2_eval_expression(context) {
    // xy_count > 25 AND xy_count <= 50 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  > 25) && (feature.get('xy_count')  <= 50)) && (feature.get('AddrName')  != 'Daxing'));
}


function QingExamTakersCity7rule3_eval_expression(context) {
    // xy_count > 50 AND xy_count <= 75 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  > 50) && (feature.get('xy_count')  <= 75)) && (feature.get('AddrName')  != 'Daxing'));
}


function QingExamTakersCity7rule4_eval_expression(context) {
    // xy_count > 75 AND xy_count <= 100 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  > 75) && (feature.get('xy_count')  <= 100)) && (feature.get('AddrName')  != 'Daxing'));
}


function QingExamTakersCity7rule5_eval_expression(context) {
    // xy_count > 100 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return ((feature.get('xy_count')  > 100) && (feature.get('AddrName')  != 'Daxing'));
}


function QingExamTakersCity7rule6_eval_expression(context) {
    // AddrName = 'Daxing'

    var feature = context.feature;
    
    return (feature.get('AddrName')  == 'Daxing');
}


function MingExamTakersCity8rule0_eval_expression(context) {
    // xy_count = 1 AND AddrName <> 'Daxing' AND AddrName <> 'Jiangning'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  == 1) && (feature.get('AddrName')  != 'Daxing')) && (feature.get('AddrName')  != 'Jiangning'));
}


function MingExamTakersCity8rule1_eval_expression(context) {
    // xy_count > 1 AND xy_count <= 25 AND AddrName <> 'Daxing' AND AddrName <> 'Jiangning'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 1) && (feature.get('xy_count')  <= 25)) && (feature.get('AddrName')  != 'Daxing')) && (feature.get('AddrName')  != 'Jiangning'));
}


function MingExamTakersCity8rule2_eval_expression(context) {
    // xy_count > 25 AND xy_count <= 50 AND AddrName <> 'Daxing' AND AddrName <> 'Jiangning'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 25) && (feature.get('xy_count')  <= 50)) && (feature.get('AddrName')  != 'Daxing')) && (feature.get('AddrName')  != 'Jiangning'));
}


function MingExamTakersCity8rule3_eval_expression(context) {
    // xy_count > 50 AND xy_count <= 75 AND AddrName <> 'Daxing' AND AddrName <> 'Jiangning'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 50) && (feature.get('xy_count')  <= 75)) && (feature.get('AddrName')  != 'Daxing')) && (feature.get('AddrName')  != 'Jiangning'));
}


function MingExamTakersCity8rule4_eval_expression(context) {
    // xy_count > 75 AND xy_count <= 100 AND AddrName <> 'Daxing' AND AddrName <> 'Jiangning'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 75) && (feature.get('xy_count')  <= 100)) && (feature.get('AddrName')  != 'Daxing')) && (feature.get('AddrName')  != 'Jiangning'));
}


function MingExamTakersCity8rule5_eval_expression(context) {
    // xy_count > 100 AND AddrName <> 'Daxing'

    var feature = context.feature;
    
    return ((feature.get('xy_count')  > 100) && (feature.get('AddrName')  != 'Daxing'));
}


function MingExamTakersCity8rule6_eval_expression(context) {
    // AddrName = 'Daxing' OR AddrName = 'Jiangning'

    var feature = context.feature;
    
    return ((feature.get('AddrName')  == 'Daxing') || (feature.get('AddrName')  == 'Jiangning'));
}


function NorthernSongExamTakersCity9rule0_eval_expression(context) {
    // xy_count = 1 AND AddrName <> 'Kaifeng' AND AddrName <> 'Linan'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  == 1) && (feature.get('AddrName')  != 'Kaifeng')) && (feature.get('AddrName')  != 'Linan'));
}


function NorthernSongExamTakersCity9rule1_eval_expression(context) {
    // xy_count > 1 AND xy_count <= 25 AND AddrName <> 'Kaifeng' AND AddrName <> 'Linan'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 1) && (feature.get('xy_count')  <= 25)) && (feature.get('AddrName')  != 'Kaifeng')) && (feature.get('AddrName')  != 'Linan'));
}


function NorthernSongExamTakersCity9rule2_eval_expression(context) {
    // xy_count > 25 AND xy_count <= 50 AND AddrName <> 'Kaifeng' AND AddrName <> 'Linan'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 25) && (feature.get('xy_count')  <= 50)) && (feature.get('AddrName')  != 'Kaifeng')) && (feature.get('AddrName')  != 'Linan'));
}


function NorthernSongExamTakersCity9rule3_eval_expression(context) {
    // xy_count > 50 AND xy_count <= 75 AND AddrName <> 'Kaifeng' AND AddrName <> 'Linan'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 50) && (feature.get('xy_count')  <= 75)) && (feature.get('AddrName')  != 'Kaifeng')) && (feature.get('AddrName')  != 'Linan'));
}


function NorthernSongExamTakersCity9rule4_eval_expression(context) {
    // xy_count > 75 AND xy_count <= 100 AND AddrName <> 'Kaifeng' AND AddrName <> 'Linan'

    var feature = context.feature;
    
    return ((((feature.get('xy_count')  > 75) && (feature.get('xy_count')  <= 100)) && (feature.get('AddrName')  != 'Kaifeng')) && (feature.get('AddrName')  != 'Linan'));
}


function NorthernSongExamTakersCity9rule5_eval_expression(context) {
    // xy_count > 100 AND AddrName <> 'Kaifeng' AND AddrName <> 'Linan'

    var feature = context.feature;
    
    return (((feature.get('xy_count')  > 100) && (feature.get('AddrName')  != 'Kaifeng')) && (feature.get('AddrName')  != 'Linan'));
}


function NorthernSongExamTakersCity9rule6_eval_expression(context) {
    // AddrName = 'Kaifeng'

    var feature = context.feature;
    
    return (feature.get('AddrName')  == 'Kaifeng');
}


function NorthernSongExamTakersCity9rule7_eval_expression(context) {
    // AddrName = 'Linan'

    var feature = context.feature;
    
    return (feature.get('AddrName')  == 'Linan');
}