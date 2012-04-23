// JavaScript Document

/********************************************************************
* File Name:   jscript.js
*
* Description: Inputs classes based off of selected college
* 
* Programmer:  Kim Holmes 
*              zorianak@me.com
********************************************************************/
function addClasses()
{
  var result = document.getElementById('resultsdiv');
  var selecter = document.getElementById('schools');
  
  //define some classes for each
  //UC Berkeley
  var berkClasses = "<h1>University of California, Berkeley</h1>";
  berkClasses += "<a href=\"#fulltime\">Skip to full time courses >></a>";
  berkClasses += "<p>Below are a list of courses one can take at the University to gain knowledge into the various streams on Engineering to gain base knowledge of Smart Grid.</p>";
  berkClasses += "<h2>UC Berkeley Specialized Programs of Study:</h2>";

  
  berkClasses += "Website: <a href=\"http://extension.berkeley.edu/spos/smartgrid.html\">http://extension.berkeley.edu/spos/smartgrid.html</a>";
  berkClasses += "<br>Brochure: <a href=\"http://extension.berkeley.edu/spos/pdf/sustainability.pdf\">http://extension.berkeley.edu/spos/pdf/sustainability.pdf</a>";
  berkClasses += "<br>Email Address: <a href=\"mailto:course@unex.berkeley.edu\">course@unex.berkeley.edu</a>";
  berkClasses += "<br>Phone: (510) 642-4151";
  
  berkClasses += "<h2>UC Berkeley Extension</h2>";
  berkClasses += "<h3>Smart Grid Technology</h3>";
  berkClasses += "<p>The entry-level program provides a solid foundation in smart grid technology (SGT), including a technical overview of networking, electrical engineering, and power transmission and distribution. In addition to a wide range of smart grid theory, you study deployment issues, vendors, demand shaping, and statutory and regulatory requirements—instruction that prepares one to seize new opportunities in the emerging field of networked power.</p>";
  berkClasses += "<h4>Who Will Benefit</h4>";
  berkClasses += "<p>Any sustainable professional looking for increased technical knowledge or a technology worker interested in migrating to SGT, the program provides the knowledge needed. The program is also an excellent fit if you're an urban planner, home developer, real estate professional or policy maker looking for new or advanced opportunities in public utilities, commercial construction, renewable energy or electric transportation.</p>";
  
  berkClasses += "<p class=\"course\">Smart Grids: Introduction</p>";
  berkClasses += "<p>Learn about the new intelligent energy grid that supports the green-energy initiatives of the 21st century. Study real-world value propositions, business perspectives and solution scenarios from business economics and technical practicalities points of view.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Command and Control</p>";
  berkClasses += "<p>In this survey course, you first review the communication technology for distribution automation of AC energy and then advance into technology trade-off considerations. You build a foundation for understanding the control network.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Energy-Efficient Transmission</p>";
  berkClasses += "<p>Learn about the challenges of high-power interconnections and review quality considerations.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Internet of Things</p>";
  berkClasses += "<p>Taking smart energy grids as a model, you investigate topics such as wireless sensor network issues, the role of middleware, radio frequency identification (RFID) and sensor network technologies and security and privacy issues.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Metering and Home Area Networks</p>";
  berkClasses += "<p>Gain a solid technical foundation for understanding smart meters and home power networking, including Open HAN system requirements, modern wireless sensor networks, home automation and ZigBee Smart Energy.</p>";
  berkClasses += "<p class=\"course\">Smart Grids: Microgrids</p>";
  berkClasses += "<p>Variety of microgrid topics, including distributed generation, wind, photovoltaics, fuel cells, supervisory control and data acquisition (SCADA) systems, securing smart grids, matching community needs, smart meters and devices.</p>";
  
  berkClasses += "<h3>Sustainability and Energy</h3>";
  berkClasses += "<p>Focus on energy use and its impact on the environment in the Professional Program in Sustainability and Energy. Understand the impact of current energy use patterns on climate change. Learn about climate change law, such as California's AB 32 and its impact on local government and businesses. Examine energy and sustainability from the perspectives of technology, municipal planning and policy. With the specialized knowledge you gain from this program—which is designed for professionals working in both the public and private sectors, from government agencies and nonprofit organizations to utility companies, energy consulting firms and other businesses—you are prepared to manage energy use and develop successful sustainable energy strategies.</p>";
  berkClasses += "<h4>Who Will Benefit</h4>";
  berkClasses += "<p>The curriculum is beneficial if you are a career changer or advancer; working professional in the public or private sector, including public agencies, utilities and energy conservation; energy consultant; business owner; nonprofit organization employee; or sustainability manager. The program is also ideal if you wish to better understand sustainable energy management.</p>";
  berkClasses += "<p>Upon successful completion of the program, you understand the principles of sustainability management and the impact of climate change law on businesses and government; have the necessary skills and knowledge to make assessments and analyze and manage issues related to energy use, climate change and sustainability; and focus your career on clean energy.</p>";
  
  berkClasses += "<p class=\"course\">Introduction to Sustainability Management</p>";
  berkClasses += "<p>Sustainability in the context of environmental, economic, and social forces that shape emerging policies and management decisions. Investigate the possibility of creating a common set of sustainability principles</p>";
  berkClasses += "<p class=\"course\">Climate Change and Law AB 32: What It Means for You</p>";
  berkClasses += "<p>Learn requirements set forth in AB 32 and other laws, and gain a solid understanding of related issues.</p>";
  berkClasses += "<p class=\"course\">Energy for Sustainability: Technology, Planning and Policy</p>";
  berkClasses += "<p>Evaluate policies, regulations, and laws at the local and state level. Learn how energy strategies impact residential and commercial sectors, corporations, and governments. Examine issues in science, technology, policy, law, and business.</p>";
  berkClasses += "<p class=\"course\">Energy Use and Climate Change</p>";
  berkClasses += "<p>Examine the threat from the lack of significant incentives to change behavior and shift habits toward sustainable energy consumption in the United States. Study the fundamental impacts from current energy use and the support infrastructure.</p>";
  
  //full time courses for UC Berkeley
  berkClasses += "<h2><a href=\"#\" name=\"fulltime\"></a>Full Time Courses</h2>";
  berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Mechanical+Engineering&p_dept_cd=MEC+ENG\" name=\"Mechanical Engineering\">Mechanical Engineering</a></h3>";
  berkClasses += "<h4>110.  Introduction to Product Development</h4>";
  berkClasses += "<h4>146.  Energy Conversion Principles</h4>";
  berkClasses += "<h4>C232.  Advanced Control Systems I.</h4>";
  berkClasses += "<h4>239.  Advanced Design and Automation</h4>";
  
  berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Electrical Engineering</a></h3>";
  berkClasses += "<h4>122.  Introduction to Communication Networks.</h4>";
  berkClasses += "<h4>C128.  Feedback Control Systems.</h4>";
  berkClasses += "<h4>224B.  Fundamentals of Wireless Communication.</h4>";
  
   berkClasses += "<h3><a href=\"http://sis.berkeley.edu/catalog/gcc_list_crse_req?p_dept_name=Electrical+Engineering+and+Computer+Sciences&p_dept_cd=EECS&p_path=*\">Computer Science</a></h3>";
  berkClasses += "<h4>161.  Computer Security.</h4>";
  berkClasses += "<h4>195.  Social Implications of Computer Technology.</h4>";
  berkClasses += "<h4>261.  Security in Computer Systems.</h4>";
  berkClasses += "<h4>268.  Computer Networks.</h4>";
  berkClasses += "<h4>276.  Cryptography.</h4>";
  
  //UC Davis
  var davisClasses = "<h1>UC Davis</h1>";
  davisClasses += "<h3>Certificate Programs:</h3>";
  davisClasses += "<h4><a href=\"http://extension.ucdavis.edu/unit/green_building_and_sustainability/certificate/green_building_and_sustainable_design/index.asp\" name=\"Green Certificate Program\">Certificate Program in Green Building and Sustainable Design</a></h4>";
  davisClasses += "<p>The Green Building and Sustainable Design Certificate Program addresses the trend of developing healthier communities by defining effective ways to utilize energy and promote water efficiency. The program combines elements from architecture, civil engineering, landscape architecture, environmental and land use planning, and construction management. Develop successful strategies for implementation of green building and sustainable design into site planning and design, building design and construction, and building management practices.</p>";
  davisClasses += "<h5>Gain practical knowledge that matters</h5>";
  davisClasses += "<ul><li>Gain an in-depth understanding of the processes of incorporating social, economic and environmental issues into the planning, design and construction.</li><li>Learn green and sustainable design techniques for both commercial and residential buildings</li><li>Build your understanding of: site analysis, construction management, water resources, planning and landscape architecture.</li><li>Become better prepared to implement sustainable practices.</li></ul>";
  davisClasses += "<h5>Designed for professionals like you</h5>";
  davisClasses += "<p>The program is designed for planners, architects, developers, contractors, landscape architects, interior designers and anyone interested in the implementation of sustainable building tools and strategies. It is also recommended for professionals moving into fields that require knowledge of green building or sustainable design, or anyone who recognizes the importance of green building and sustainable design.</p>";
  davisClasses += "<h3>Courses:</h3>";
	davisClasses += "<h4>Sustainability and the Built Environment</h4>";
	davisClasses += "<p>This introduction to the Green Building and Sustainable Design Certificate Program highlights large-scale planned communities, infill sites and individual structures from the U.S. and other nations, as well as how these buildings are serviced and managed.</p>";
	davisClasses += "<h4>Sustainable Planning, Environmental Site Design and Development</h4>";
	davisClasses += "<p>Learn about fundamental sustainability issues and processes as they apply to community planning and site design situations. Discover how to identify key challenges when incorporating sustainability into planning strategies, policies and site design, and examine technical and environmental factors of site design. </p>";
	davisClasses += "<h4>Sustainable Water Management in Site Design and Development</h4>";
	davisClasses += "<p>Incorporate a sustainable water resources approach into urban development and its related infrastructure at the planning, design and construction stages. </p>";
	davisClasses += "<h4>Green Architecture</h4>";
	davisClasses += "<p>Explore the issues, challenges and opportunities associated with green building and sustainable design. Examine innovative residential, commercial, industrial, mixed-use, and low- and high-density specialty buildings. Evaluate the micro- and macro-economic issues associated with green buildings.</p>";
	davisClasses += "<h4>Green Building Materials and Construction Methods</h4>";
	davisClasses += "<p>Learn to implement green building practices into homes, apartments, business complexes and office buildings. Utilize materials and techniques that promote healthy, durable and environmentally responsible construction.</p>"; 
	davisClasses += "<h4>Energy Sources, End Uses and Impacts</h4>";
	davisClasses += "<p>Examine the energy issue from the macro perspective of the built environment to the micro approach of how heat flows throughout a building.</p>";
	davisClasses += "<h4>Green Building Design Studio</h4>";
	davisClasses += "<p>Apply what you learned in the Green Building and Sustainable Design or Renewable Energy certificate programs to a real-world example.</p>";
	davisClasses += "<hr>";
	davisClasses += "<h3><a href=\"http://extension.ucdavis.edu/unit/business_and_management/certificate/energy_resource_management/\" name=\"Energy Resource Management Certificate\">Certificate Program in Energy Resource Management</a></h3>";
	davisClasses += "<p>The UC Davis Extension Certificate Program in Energy Resource Management is a completely online program designed specifically for those leaders—professional engineers, construction planners and designers, facility or plant managers, energy analysts, architects, agency managers, and other who wish to expand their expertise in this critical area.</p>";
	davisClasses += "<p>This certificate program addresses the entire range of issues involved in understanding and managing energy in any industry, from heavy to light energy users. The six courses of the program provide the information you need to distinguish yourself as an expert in the energy resource management field.</p>";
	davisClasses += "<h4>Gain practical knowledge that matters</h4>";
	davisClasses += "<ul><li>Explore the practical, sustainable application of contemporary energy resource management</li><li>Learn best practices and discover techniques and resources to improve business competitiveness and ensure regulatory compliance</li><li>Stay apprised of new and emerging developments, technologies and regulations</li><li>Analyze supply-side sourcing and procurement portfolio strategies</li><li>Examine energy security risk analysis methods</li><li>Learn innovative methods for financing energy management projects</li></ul>";
	davisClasses += "<h4>Designed for professionals like you</h4>";
	davisClasses += "<p>This program benefits those wanting to distinguish themselves as energy resource management experts and draws from a wide variety of disciplines, including engineering, construction planning and design, and facility-plant management and/or operations, such as:</p>";
	davisClasses += "<ul><li>Energy engineers, analysts, managers and auditors</li><li>Chief sustainability officers</li><li>Demand-side management auditors and managers</li><li>Architects</li><li>Construction planners and designers</li><li>Agency and facility managers</li><ul>";
	davisClasses += "<h3>Courses:</h3>";
	davisClasses += "<h4>Introduction to Energy Resource Management</h4>";
	davisClasses += "<p>Examine the four major components of energy management--supply, demand, regulation and environment--and the concepts and principles behind successful energy management.</p>";
	davisClasses += "<h4>Energy Resource Management: Supply</h4>";
	davisClasses += "<p>Learn to conduct market assessments and to develop sourcing and procurement strategies. Topics include energy management control systems, natural gas purchasing opportunities in the spot market, thermal energy storage, alternative energy supplies, energy security and energy trading.</p>";
	davisClasses += "<h4>Energy Resource Management: Regulatory</h4>";
	davisClasses += "<p>Learn the difference between regulations and tariffs pertaining to electrical generation, transmission and distribution and those pertaining to gas production, transmission and distribution.</p>";
	davisClasses += "<h4>Energy Resource Management: Demand</h4>";
	davisClasses += "<p>Familiarize yourself with an overview of Leadership in Energy and Environmental Design (LEED). Amp up your knowledge of: the latest lighting technologies and products, project management, fleet operation and maintenance, verification of energy savings, and best practices and benchmarking. </p>";
	davisClasses += "<h4>Energy Resource Management: Environment</h4>";
	davisClasses += "<p>Explore the range of environmental issues affected by energy use. Gain perspectives on current trends and technologies. Examine the environmental fundamentals--planning, development and implementation--of WAGES (water, air, gas, electricity and steam) and renewable energy systems</p>";
	davisClasses += "<h4>Energy Resource Management: Leadership</h4>";
	davisClasses += "<p>Examine the leadership issues involved in managing energy from organizational behavior and change management to project management and communication skills.</p>";
	davisClasses += "<hr>";
	davisClasses += "<h2><a href=\"http://extension.ucdavis.edu/unit/green_building_and_sustainability/certificate/renewable_energy/\" name=\"Renewable Energy Certificate\">Certificate Program in Renewable Energy</a></h2>";
	davisClasses += "<p>Gain in-depth technical training in the treatment of renewable energy systems design with the Renewable Energy Certificate Program. This program combines elements from architecture, civil engineering, landscape architecture, environmental and land use planning, construction management and renewable energy systems design.</p>";
	davisClasses += "<h3>Gain practical knowledge and skills</h3>";
	davisClasses += "<ul><li>Learn to develop successful strategies for incorporating renewable energy systems into site planning and design, building design and construction, and building management practices.</li><li>Acquire a holistic understanding of the theory and science behind today's renewable energy systems.</li><li>Get hands-on experience in designing and siting renewable energy systems for commercial, residential and agricultural applications.</li><li>Stay up-to-date with the latest energy technologies, legislation and regulations.</li></ul>";
	davisClasses += "<h3>Designed for professionals like you</h3>";
	davisClasses += "<p>The program is designed for professionals who want to advance their knowledge and careers in the planning, design, engineering, renewable energy systems and construction disciplines, including: construction managers, project managers, architects, architectural drafters, civil and mechanical engineers, interior designers, urban and regional planners, developers, builders and landscape architects.</p>";
	davisClasses += "<h3>Courses:</h3>";
	davisClasses += "<h4>Sustainability and the Built Environment</h4>";
	davisClasses += "<p>Explore sustainability as it relates to the built environment—from the economic, environmental and social-equity perspectives. Learn how researchers and analysts define sustainability, as well as how they measure and track progress. </p>";
	davisClasses += "<h4>Energy Sources, End Uses and Impacts</h4>";
	davisClasses += "<p>From solar panels and exterior shades to lighting a space and painting a roof white, learn how to analyze energy use as an effective strategy to promote energy conservation in the built environment.</p>";
	davisClasses += "<h4>Green Building Design Studio</h4>";
	davisClasses += "<p>Apply what you learned in the Green Building and Sustainable Design or Renewable Energy certificate programs to a real-world example.</p>";
	davisClasses += "<h4>Cogeneration and District Solutions</h4>";
	davisClasses += "<p>Gain an overview of micro-cogeneration and district energy solutions for commercial and district applications. Learn about cogeneration system selection and sizing, preliminary feasibility study approaches, heat to power ratios, computer programs, economic and environmental issues, emerging technologies and regulations.</p>";
	davisClasses += "<h4>Bioenergy Systems Design</h4>";
	davisClasses += "<p>Explore the environmental, economic and social impacts. Learn about emerging bioenergy technologies, legislation and regulations.</p>";
	davisClasses += "<h4>Geothermal Energy Systems Design</h4>";
	davisClasses += "<p>Gain the necessary knowledge to understand the promise and limitations of geothermal heat pump installation and direct use applications.</p>";
	davisClasses += "<h4>Small Wind Energy Systems</h4>";
	davisClasses += "<p>Learn to design and install a small wind system for residential and commercial applications. The class will examine: how to measure wind and estimate energy output; small wind system types and components; wind system selection and site criteria; economic issues; public concerns; permitting; installation, safety, operation and maintenance criteria; emerging technologies, legislation and regulations; and case studies. </p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems Design</h4>";
	davisClasses += "<p>Learn the basics of solar photovoltaic power systems for both residential and commercial use, as well as solar system physics and technology, design and implementation.</p>";
	davisClasses += "<h4>Solar Thermal Energy Systems Design</h4>";
	davisClasses += "<p>Learn the fundamentals of designing and installing these power systems for residential and commercial applications and work in teams to design a solar thermal energy system.</p>";
	davisClasses += "<hr>";
	davisClasses += "<h3><a href=\"http://extension.ucdavis.edu/unit/green_building_and_sustainability/certificate/solar_energy_systems_and_design/#L34054\" name=\"Solar Energy Systems and Design Certificate\">Professional Concentration in Solar Energy Systems and Design</a></h3>";
	davisClasses += "<p>Acquire a fundamental understanding and application of solar energy systems design with the Professional Concentration Program in Solar Energy Systems and Design. Explore the various aspects involved in utilizing solar energy systems for residential and commercial use.</p>";
	davisClasses += "<h4>Gain practical knowledge and skills</h4>";
	davisClasses += "<ul><li>Acquire the practical skills for designing and installing solar energy systems in your home or business</li><li>Learn about emerging industry trends and the latest technologies</li><li>Gain valuable information about solar resources in California and government initiatives for promoting solar energy, including the California Solar Initiative</li><li>Examine current code and compliance requirements for solar energy systems</li></ul>";
	davisClasses += "<h4>Designed for professionals like you</h4>";
	davisClasses += "<p>This program is designed for home and business owners, designers, architects, builders, roofing contractors and installers. It is also applicable to anyone interested in learning about solar energy systems and its environmental benefits.</p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems: Overview</h4>";
	davisClasses += "<p>Gain useful background information about the solar resources in California and the various federal and state government initiatives to promote solar energy as a mainstream power source, including the latest policies and legislation. Learn about the California Solar Initiative and its future implementation, utility interconnection and net metering issues.</p>";
	davisClasses += "<h5>Who benefits</h5>";
	davisClasses += "<p>Home and business owners, designers, architects, builders, roofing contractors, installers and those interested in learning about the environmental benefits of solar energy.</p>";
	davisClasses += "<h4>Solar Thermal Energy Systems: Overview</h4>";
	davisClasses += "<p>Gain practical information about industry trends and state-of-the-art technologies. Learn about the actual market situation and how to grow your skills in consulting, planning and design, economics and marketing.</p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems Design</h4>";
	davisClasses += "<p>Learn the basics of solar photovoltaic power systems for both residential and commercial use, as well as solar system physics and technology, design and implementation.</p>";
	davisClasses += "<h4>Solar Thermal Energy Systems Design</h4>";
	davisClasses += "<p>Learn the fundamentals of designing and installing these power systems for residential and commercial applications and work in teams to design a solar thermal energy system.</p>";
	davisClasses += "<h4>Solar Photovoltaic (PV) Energy Systems: Compliance and Code Overview</h4>";
	davisClasses += "<p>Learn about design and installation compliance issues for both residential & commercial solar energy systems in the areas of system sizing, array layout, electrical wiring and utility interconnection.</p>";
		davisClasses += "<hr>";
		davisClasses += "<h2>Courses treated as Full Time/Part Time in the field of Engineering.</h2>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/EME/EMEcourses.html\" name=\"Mechanical Engineering\">Mechanical Engineering:</a></h3>";
		davisClasses += "<ul><li>152. Computer-Aided Mechanism Design</li><li>154. Mechatronics</li><li>268. Wind Power Engineering</li><li>272. Theory and Design of Control Systems</li><li>274. Analysis and Design of Digital Control Systems</li><li>276. Data Acquisition and Analysis</li></ul>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/EEC/EECcourses.html\" name=\"Electrical Engineering\">Electrical Engineering:</a></h3>";
		davisClasses += "<ul><li>132A, B, C. RF and Microwaves in Wireless Communication</li><li>151. Instrumentation Interfacing, Signals and Systems</li><li>158. Control System Design Methods</li><li>172. Microcomputer-Based System Design</li><li>173A. Computer Networks</li><li>173B. Design Projects in Communication Networks</li><li>180A. Digital Systems I</li><li>228. Advanced Microwave Circuit and Device Design Techniques</li><li>252. Multivariable Control System Design</li><li>274. Internet Measurements, Modeling and Analysis</li>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/ECS/ECScourses.html\" name=\"Computer Science\">Computer Science:</a></h3>";
		davisClasses += "<ul><li>153. Computer Security</li><li>155. Computer Security for Non-Majors</li><li>160. Introduction to Software Engineering</li><li>165A,B. Database Systems</li><li>166. Scientific Data Management</li><li>222A. Design and Analysis of Algorithms</li><li>227. Modern Cryptography</li><li>228. Cryptography for E-Commerce</li><li>235A. Computer and Information Security</li><li>236. Computer Security: Intrusion Detection Based Approach</li><li>257. Mobile and Wireless Networks</li></ul>";
		davisClasses += "<h3><a href=\"http://registrar.ucdavis.edu/UCDWebCatalog/programs/ERS/ERScourses.html\" name=\"Envivonrmental Resources Sciences\">Environment Resources Sciences:</a></h3>";
		davisClasses += "<ul><li>186. Environmental Remote Sensing</li><li>195. Integrating Environmental Science and Management</li></ul>";
  
  //UC Irvine
  var irvineClasses = "<h1>University of California, Irvine</h1>";
  irvineClasses += "<h2>Certificate Programs</h2>";
  irvineClasses += "<h3>Sustainable Business Management</h3>";
  irvineClasses += "<h4>Program Objectives</h4>";
  irvineClasses += "<p>Identify current and future key environmental regulatory compliance legislation that impacts organizational strategy, planning and operations. a broad, systems-thinking approach to affect every value-creation lever responding to government legislation consumer concerns and stakeholder pressure.</p><p>Link competitive advantage and corporate social responsibility to assess strategic opportunities and risks while minimizing potential liability.</p>";

  irvineClasses += "<h4>Who Should Attend</h4>";
  irvineClasses += "<p>Individuals seeking a career change or positions within the sustainability field, managers, directors, architects, urban planners, landscape architects, designers, business owners, consultants, and all those responsible for going “green.”</p>";
  irvineClasses += "<h4>COURSES:</h4>";
  irvineClasses += "<h5>Introduction to Corporate Social Responsibility, Sustainability and Green Business ( 3 units ): Course #   MGMT X430.12</h5>";
  irvineClasses += "<p>The explosion of corporate social responsibility into mainstream business decision-making has been fueled by an unprecedented number of recent environmental, financial, legal, social and climate events. </p>";
  irvineClasses += "<h5>Legal Developments Concerning the Environment and Climate Change: Course #   SOCECOL X416.5</h5>";
  irvineClasses += "<p>A general sense of urgency, and the realization that there is little time to waste, has given rise to a host of legislative and regulatory enactments. Review global and federal developments, with particular attention on developments in California.</p>";

  irvineClasses += "<h5>Framework for Strategic Leadership: Course #   SOCECOL X417.21</h5>";
  irvineClasses += "<p>The course will also provide an overview of the LEED system for sustainable construction; examine traditional professional and contract liabilities and how these liabilities and associated risks may be expected to play out in the new arena of sustainability.</p>";
  irvineClasses += "<h5>Green Marketing Principles: Winning Strategies for a New Era: Course #   MGMT X461.63</h5>";
  irvineClasses += "<p>Socio-economic, cultural and legislative pressures are creating an inevitable tide towards a future in which companies will be more socially responsible and provide cleaner and more efficient products and services that damage the planet less.</p>";
  irvineClasses += "<h5>Climate Protection and Environmental Sustainability: Course #   ENGRCEE X468</h5>";
  irvineClasses += "<p> In this course you will explore the forces driving sustainability change, the application of sustainable practices, and be guided through an analysis that will help you develop a vision and plan for implementation.</p>";
  irvineClasses += "<h5>Sustainability Reporting: Drivers, Protocols and Quantitative Methods: Course #   SOCECOL X417.26</h5>";
  irvineClasses += "<p>This course introduces students to the typical drivers and stakeholders associated with sustainability programs; some of the available reporting protocols; factors to consider when selecting KPIs and metrics; and how to establish goals and describe performance on a quantitative or qualitative basis.</p>";
  irvineClasses += "<h5>The Social Component of Sustainability: Course #   SOCECOL X417.37</h5";
  irvineClasses += "<p>Identify various social impacts as opportunities for adopting sustainable practices, including life-cycle analyses and community engagement strategies that will inspire your consumer base, adding value beyond direct Return-On-Investment (ROI).</p>";

  irvineClasses += "<hr />";



  irvineClasses += "<h2>Courses treated as Full Time/Part Time in the field of Engineering.</h2>";
  irvineClasses += "<h3><a href=\"http://www.editor.uci.edu/catalogue/engr/engr.11.htm\" name=\"Mechanical Engineering\">Mechanical Engineering:</a></h3>";
  irvineClasses += "<ul><li>MAE117 Solar and Renewable Energy Systems</li><li>MAE118 Sustainable Energy Systems</li><li>MAE170 Introduction to Control Systems</li><li>MAE183 Computer-Aided Mechanism Design</li><li>MAE218 Sustainable Energy Systems</li><li>MAE249 Micro-Sensors and Actuators</li></ul>";

  irvineClasses += "<h3><a href=\"http://www.editor.uci.edu/catalogue/engr/engr.9.htm\" name=\"Electrical Engineering\">Electrical Engineering:</a></h3>";

  irvineClasses += "<ul><li>EECS116 Introduction to Data Management</li><li>EECS141A,B Communication Systems</li><li>EECS148 Introduction to Computer Networks</li><li>EECS160A Introduction to Control Systems</li><li>EECS160LA Control Systems I Laboratory</li><li>EECS160B Sampled-Data and Digital Control Systems</li><li>EECS163 Power Systems</li><li>EECS163L Power Systems Laboratory</li><li>EECS166A Industrial and Power Electronics</li><li>EECS166B Advanced Topics in Industrial and Power Electronics</li><li>EECS179 Microelectromechanical Systems (MEMS)</li><li>EECS241A Digital Communications</li><li>EECS244 Wireless Communications</li><li>EECS248A Internet</li><li>EECS267A,B Industrial and Power Electronics</li><li>EECS279 Micro-Sensors and Actuators</li></ul>";

  irvineClasses += "<h3><a href=\"http://www.editor.uci.edu/catalogue/ics/ics.3.htm#courses\" name=\"Computer Science\">Computer Science:</a></h3>";

  irvineClasses += "<ul><li>122A Introduction to Data Management</li><li>122B Project in Databases and Web Applications</li><li>125 Next Generation Search Systems</li><li>132 Computer Networks</li><li>134 Computer and Network Security</li><li>137 Internet Applications Engineering</li><li>167 Introduction to Applied Cryptography</li><li>168 Network Optimization</li><li>201 Foundations of Cryptographic Protocols</li><li>202 Applied Cryptography</li><li>203 Network and Distributed Systems Security</li><li>221 Information Retrieval, Filtering, and Classification</li><li>222 Principles of Data Management</li><li>223 Transaction Processing and Distributed Data Management</li><li>224 Advanced Topics in Data Management</li><li>235 Internet Technology</li><li>236 Wireless and Mobile Networking</li></ul>";

irvineClasses += "<h3><a href=\"http://www.editor.uci.edu/catalogue/ics/ics.3.htm#courses\" name=\"Other Engineering\">Others:</a></h3>";

irvineClasses += "<ul><li>CEE110 Methods III: Modeling, Economics, and Management</li></ul>";
  
  //UCLA
  var uclaClasses = "<h2>Mechanical Engineering</h2>";
  uclaClasses += "<p>133AL. Power Conversion Thermodynamics Laboratory</p>";
  uclaClasses += "<p>136. Energy and Environment</p>";
  
  //chabot college
  //Chabot College
	var chabot = "";
	chabot += "<h1>Chabot College</h1>";
	chabot += "<p>P: (510) 723-6700 (Office of Admissions and Records)</p><p>E-mail: ccarcom@iserver.clpccd.cc.ca.us (Office of Admissions and Records)</p><p>College Catalog - 	http://www.chabotcollege.edu/academics/schedule/pdfs/Spring2012Schedule.pdf</p><p>Website – http://www.chabotcollege.edu/</p>";
	
	chabot += "<h2><a href=\"http://www.chabotcollege.edu/csci/\" name=\"Comp Sci Associate in Art\">Computer Science Associate in Art/Science Degrees</a></h2>";
	chabot += "<p>The Chabot Computer Science Department offers a broad curriculum including both academic and vocational programs. Our academic curriculum is designed primarily to prepare students for transfer to a four year college in Computer Science, Engineering or a related field. Vocational programs include certificates and degrees that provide marketable and up-to-date technical skills. A number of our courses are offered at night or in web-based format to accommodate students with geographic or scheduling constraints.</p>";
	chabot += "<h3>CSCI 8 Computer Literacy</h3>";
	chabot += "<p>(page 31 of course catalog)</p><p>Intro to computers including: Microsoft Windows, Microsoft Office, multimedia, using browsers and World Wide Web, types of computer software in use including programming languages, electronic mail, computer-based careers and trends, and other computing issues.</p>";
	chabot += "<h2><a href=\"http://www.chabotcollege.edu/degreescertificates/electronicsystemstechnology.cfm\" name=\"Electronic Systems Technology Associate in Science Degree\">Electronic Systems Technology Associate in Science Degree</a></h2>";
	chabot += "<p>Chabot offers three programs in Electronic Systems Technology: Certificate in Consumer Technology, Certificate in Industrial Electronic Technology, and AS degree in Electronic Systems Technology. This degree prepares you for entry-level positions in a wide range of industries that use electronics technician skills, including biotechnology, manufacturing, entertainment, automotive and consumer products. Electronic Systems Technology is a key enabler of all of these contemporary industries.</p>";
	chabot += "<h3>EST 58 Digital Logic Systems</h3>"; 
	chabot += "<p>(page 35 of course catalog)</p><p>Architecture, programming, application and troubleshooting of complex programmable logic device (CPLD) electronic systems. Includes programming in VHDL. Digital building blocks, number systems, Boolean algebra, combinational and sequential logic, integrated logic families, digital circuit measurement techniques and instrumentation, troubleshooting techniques.</p>";
	chabot += "<h2><a href=\"http://www.chabotcollege.edu/degreescertificates/engineering.cfm\" name=\"Engineering Associate in Science Degree\">Engineering Associate in Science Degree</a></h2>";
	chabot += "<p>The Associate in Science degree is designed to provide the foundation for subsequent transfer to a CSU or UC Engineering program. The core courses fulfill most of the lower division requirements for the majority of CSU and UC engineering majors. The Associate in Science degree, as well as putting students on the path to transfer, ensures that students develop a strong foundation in engineering, mathematics, and the sciences.</p>";
	chabot += "<h3>Engineering 45 Materials of Engineering</h3>";
	chabot += "<p>(page 36 of course catalog).</p><p>Application of principles of chemistry and physics to the properties of engineering materials. The relation of microstructure to mechanical, electrical, thermal and optical properties of metals. Solid material phase equilibria and transformations. The physical, chemical, mechanical and optical properties of ceramics, composites, and 	polymers. Operation and use of materials characterization instruments and methods.</p>";
	chabot += "<h2><a href=\"http://www.chabotcollege.edu/degreescertificates/consumertechnology.cfm\" name=\"Consumer Technology Certificate\">Consumer Technology Certificate</a></h2>";
	chabot += "<h3>EST 55A Microcontroller Systems</h3>"
	chabot += "<p>(page 118 of college catalog)</p><p>Architecture, programming, application and troubleshooting of single-chip microcontroller electronic systems. Digital building blocks, number systems, programming in high-level and assembly language. Interfacing the microcontroller for practical applications, measurement techniques and instrumentation, troubleshooting techniques.</p>";
	chabot += "<h3>EST 55B Digital Logic Systems</h3>";
	chabot += "<p>(page 118 of college catalog)</p><p>Architecture, programming, application and troubleshooting of complex programmable logic device (CPLD) electronic systems. Includes programming in VHDL. Digital building blocks, number systems, Boolean algebra, combinational and sequential logic, integrated logic families, digital circuit measurement techniques and instrumentation, troubleshooting techniques.</p>";
	chabot += "<h3>EST 58 Wireless Communication Systems</h3>";
	chabot += "<p>(page 119 of college catalog)</p><p>Introduction to wireless communications concepts and data communications, including modulation techniques, antenna and wave propagation. Digital data communication fundamentals and digital modulation techniques. Fiber optic and laser technology.</p>";
	
	//DeAnza
	//DeAnza College
	var deanza ="";
	deanza += "<h1>DeAnza College</h1>";
	deanza += "<p>P: (408) 864-5678</p><p>E-mail: not provided</p><p>Website – www.deanza.edu/</p><p>College Catalog– 	http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf</p>";
	deanza += "<h2><a href=\"http://www.deanza.edu/counseling/pdf/degrees/cad.pdf\" name=\"SolidWorks Skills Certificate\">SolidWorks Skills Certificate</a></h2>";
	deanza += "<p>De Anza College’s Computer Aided Design Department developed the SolidWorks Certificate option to teach drafter, designer, and engineering professionals entry- and mid-levels skills using SolidWorks software.</p><p>[Specific information about courses not provided]</p>";
	deanza += "<ul><li>CDI 60E SolidWorks (Beginning)</li><li>CDI 61E SolidWorks (Intermediate)</li><li>CDI 62E SolidWorks (Advanced)</li><li>CDI 63E SolidWorks (SURFACES)</li><li>CDI 64E SolidWorks (PDMWorks)</li><li>CDI 67E SolidWorks (Simulation)</li></ul>"; 
	deanza += "<h2><a href=\"http://www.deanza.edu/counseling/pdf/degrees/cad.pdf\" name=\"Computer-Aided Design Mechanical Certificate Program\">Computer-Aided Design Mechanical Certificate Program</a></h2>";
	deanza += "<p>Students pursuing De Anza College’s Computer Aided Design Certificate of Achievement Advanced will receive education in the fundamentals of CAD that combines the use of three types of design graphic software packages. </p><p>[Specific information about courses not provided]</p>";
	deanza += "<ul><li>CDI 60E SolidWorks (Beginning)</li><li>CDI 61E SolidWorks (Intermediate) </li><li>CDI 62E SolidWorks (Advanced) </li><li>CDI 63E SolidWorks (SURFACES) </li><li>CDI 64E SolidWorks (PDMWorks) </li><li>CDI 67E SolidWorks (Simulation)</li><li>CDI 70D Pro/ENGINEER Wildfire (Beginning)</li><li>CDI 70E Creo Parametric (Beginning) </li><li>CDI 71D Pro/ENGINEER Wildfire (Intermediate) </li><li>CDI 71E Creo Parametric (Intermediate) </li><li>CDI 72D Pro/ENGINEER Wildfire (Advanced)</li><li>CDI 72E Creo Parametric (Advanced) </li><li>CDI 73D Pro/ENGINEER Wildfire (Pro/SHEETMETAL) </li><li>CDI 73E Creo Parametric (Sheetmetal) </li><li>CDI 74D Pro/ENGINEER Wildfire (Pro/SURFACE) </li><li>CDI 74E Creo Parametric (Surfaces) </li><li>CDI 75D Pro/ENGINEER Wildfire (Pro/MOLD) </li><li>CDI 76D Pro/ENGINEER Wildfire (Pro/CABLE) </li><li>CDI 77D Pro/ENGINEER Wildfire (Pro/MECHANICA) </li><li>CDI 77E Creo Parametric (Mechanica) </li><li>CDI 78D Pro/ENGINEER (Windchill ProductPoint) </li><li>CDI 79D Pro/ENGINEER Wildfire (Update) </li><li>CDI 80D AutoCAD (Beginning) </li><li>CDI 81D AutoCAD (Intermediate) </li><li>CDI 82D AutoCAD Civil 3D </li><li>CDI 83D AutoDesk Revit Architecture </li><li>CDI 85D AutoDesk Inventor </li></ul";
	deanza += "<h2><a href=\"http://www.deanza.edu/counseling/pdf/degrees/cad.pdf\" name=\"CAD Mechanical Associate Degree Program\">Computer-Aided Design Mechanical Associate Degree Program</a></h2>";
	deanza += "<p>Students pursuing De Anza College’s Computer Aided Design A.S. Degree will learn the fundamentals of CAD using three different design graphic software packages. The program teaches students substantive job skills in AutoDesk products (Inventor, ACAD, and Revit), Creo, and SolidWorks CAD systems.</p><p>[Specific information about courses not provided]</p>";
	deanza += "<ul><li>CDI 60E SolidWorks (Beginning)</li><li>CDI 61E SolidWorks (Intermediate) </li><li>CDI 62E SolidWorks (Advanced) </li><li>CDI 63E SolidWorks (SURFACES) </li><li>CDI 64E SolidWorks (PDMWorks) </li><li>CDI 67E SolidWorks (Simulation)</li></ul>";
	deanza += "<h2><a href=\"http://www.deanza.edu/counseling/pdf/degrees/cis1-comp-security.pdf\" name=\"Enterprise Security Professional Certificate\">Enterprise Security Professional Certificate</a></h2>";
	deanza += "<p>This certificate program prepares students to become Enterprise Security Technicians in a networking environment. In this program students learn network security basics, emergency response planning, internet protocols, and more advanced-level security policies and procedures, Network Monitoring, and Risk Analysis and Assessment based on Network Security.</p>"; 
	deanza += "<h3><name=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Data Communication and Networking\">CIS 66 Intro. to Data Communication & Networking (page 146)</a></h3>";
	 deanza += "<p>Concepts of communication, data communications and networks. Overview of connectivity options, common protocols, local and wide area networks.</p>";
	deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Network Security\">CIS 76 Introduction to Network Security (page 146)</a></h3>";
	 deanza += "<p>Network security using the standard protocols and algorithms. All three goals of security including confidentiality, integrity, and availability will be discussed.  Attacks on security including active and passive are discussed and elaborated on. Two major techniques of security, cryptography and steganography, are described  with emphasis on cryptography. The emphasis is on mechanisms and services provided by the network security.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/counseling/pdf/degrees/cis1-comp-security.pdf\" name=\" Enterprise Security Professional Certificate\">Enterprise Security Professional Certificate</a></h3>";
	 deanza += "<p>The Associate Degree program offers students the opportunity to study information security principles and theories that focus on asset protection. In this program students learn network security basics, security policies and procedures, Network Monitoring, and Risk Analysis and Assessment based on Network Security.	Students in this program can pursue either a general course of study or a concentration in information security. </p><p>	*Courses same as Enterprise Security Professional Certificate plus General Education Courses 	and Electives</p>";
	 deanza += "<h2>Energy Management and Climate Policy Certificate</a></h2>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Energy Management and Climate Policy Certificate\">ES 58 Intro to Green Building (page 159)</a></h3>";
	 deanza += "<p>An overview of strategies to implement a green building project within your organization. The strategies include model green building policy and guidelines including LEED (Leadership in Energy and Environmental Design), assembling a green team, assessing the impact of construction and buildings on society, and an overview of key stakeholders in the construction field.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Energy Management Technology\">ES 70 Intro to Energy Management Technology (page 160)</a></h3>";
	 deanza += "<p>An overview of the field of Energy Management and its importance in today’s society, including future implications, and discussion of careers and impact on modern culture and society. This module introduces the whole building concept and related energy and conservation issues including the building envelope, HVAC systems, lighting, energy management and controls and renewable energy technologies.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Energy Management Technology\">ES 72 HVAC Systems (page 160)</a></h3>";
	 deanza += "<p>An introduction to HVAC systems, the systems that provide heating, cooling, humidity control, filtration, and comfort control to facilities.  Examines various HVAC systems and their interrelationship with other building systems.  Students will consider HVAC technologies that can help facilities managers achieve the goals of lowering energy costs, becoming more environmentally friendly, and enhancing indoor air quality.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Energy Management Technology\">ES 74 Lighting Distribution Systems (page 161)</a></h3>";
	 deanza += "<p>Provides an introduction to the fundamentals of lighting and energy management lighting techniques.  Discusses the different types of lifhting and day-lighting applications used in commercial and institutional buildings, while describing the quality and quantity of lighting needed for certain applications, measuring efficiency, color rendering, ballasts, etc. Lighting design that provides visual comfort at lower energy costs will be emphasized.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Energy Management Technology\" name=\"Electric Power Systems\">ES 75 Electric Power Systems (page 161)</a></h3>";
	 deanza += "<p>An introduction to electric power systems, focusing on distribution components such as transformers, switch-gear, distribution panels, and wiring. Power systems analysis, preventive maintenance, and record keeping techniques will be discussed. Emphasis will be placed on opportunities within a facility’s distribution system to save energy, increase equipment life, and reduce unscheduled outages.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Solar Thermal Systems\">ES 76A Solar Thermal Systems (page 161)</a></h3>";
	 deanza += "<p>An overview of solar thermal systems including water heating technologies which reduce energy use to generate hot water including maintaining equipment and insulation, reducing hot water use and water temperatures, reducing heat losses from the system, and utilizing waste heat sources and renewable energy technologies, including solar.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Energy Management Systems and Controls\">ES 78 Energy Management Systems and Controls http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf (page 161)</a></h3>";
	 deanza += "<p>Describes the most commonly used controls and energy management systems in commercial and institutional applications. Topics will include complex automatic systems for major energy-consuming equipment, as well as simple controls, including time clocks, occupancy sensors, photocells, and programmable thermostats. Computer-based energy management systems, as well as control systems to reduce peak electrical demand will be discussed.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Renewable and Alternative Energy Systems\">ES 79 Renewable and Alternative Energy Systems (page 161)</a></h3>";
	 deanza += "<p>An introduction to the potential for renewable and alternative energy systems when adding power generation capacity for a site or large facility. Life-cycle cost comparisons between renewable energy systems and conventional power generation and the added potential of reducing peak power demand will be emphasized. Topics include photovoltaic power systems, wind energy systems, and fuel cells.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"Intro to Energy Management Technology\">ESCI 61 Intro to PV Technology (page 157)</a></h3>";
	 deanza += "<p>An introduction to the fundamentals of photovoltaic (PV) basics including how solar cells convert sunlight to electricity, solar potential, types of solar systems, system size requirement and design, net metering options, rebate programs, and related topics for your home or business.  An emphasis on the benefits of renewable energy technology as well as how to understand and review multiple bids and analyzing the economics of a PV installation. Good introductory course for students considering the North American Board of Certified Energy Practitioners certification program.</p>";
	 deanza += "<h2><a href=\http://www.deanza.edu/es/pdf/2009EnergyMgmt\" name=\"Intro to Energy Management Technology\">Energy Management and Climate Policy Associate Degree</a></h2>";	
	 deanza += "<p>The Environmental Studies Department at De Anza College offers certificates and a degree in Energy Management Technology (EMT). Core energy management classes are offered in the SEMP Lab at the Kirsch Center for Environmental Studies. Also courses may be taken via mediated learning (videostream, DVD or videotape) through our Stewardship Resource Center.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"PV Technology Field Project\">ESCI 63 PV Technology Field Project (page 157)</a></h3>";
	 deanza += "<p>A PV technology field studies course emphasizing hands-on learning of solar angle/orientation and energy use calculation, PV systems design and installation for residential and commercial projects.  Good field studies course for students considering the North American Board of Certified Energy Practitioners certification program.</p>";
	 deanza += "<h3><a href=\"http://www.deanza.edu/publications/catalog/pdf/dac_catalog_2011-2012.pdf\" name=\"PV Technology Field Project\">ES 2 Humans, the Environment and Sustainability (page 159)</a></h3>";
	 deanza += "<p>A study of human evolution, biology and ecology, including human civilizations, past and present, and the interaction with the environment. Environmental worldviews (ethics), past and present, of the various cultural, ethnic, gender and socioeconomic groups will be explored.</p>";
  
    //College of the Siskiyous
  var siskiyous = "";
  siskiyous += "";
  siskiyous += "<h1>College of the Siskiyous</h1>";
  siskiyous += "<p>Phone: 530-938-5555";
  siskiyous += "<br>E-mail: registration@siskiyous.edu";
  siskiyous += "<br>College Catalog - 	http://www.siskiyous.edu/catalog/catalog0911.pdf";
  siskiyous += "<br>Website – <a href=\"http://www.siskiyous.edu\">http://www.siskiyous.edu</a>";
  siskiyous += "";
  siskiyous += "<h3>Certificate Programs</h3>";
  siskiyous += "<h4>Environmental Resources Certificate and Associate Degree Program</h4>";
  siskiyous += "<p>The Environmental Resources program provides students with education, hands-on training, and exploration of the relationships between people and natural systems for sustainable jobs, careers, and communities. The program is a unique collaboration of three distinct yet closely interrelated programs. Associate of Science Degrees and certificates are available in Natural Resources, Power Generation Technology, and Sustainable Communities.";
  siskiyous += "<h4>Power Generation Technology Certificate and Associate Degree</h4>";
  siskiyous += "<p>This program will prepare students for entry level positions in the steam and electrical power generation and distribution industry.  Students will be trained to control, monitor and maintain boilers, turbines, generators, and auxiliary equipment in power-generating plants.";
  siskiyous += "<br>    - ERPG 62 Electrical Generation and Transmission – course information not provided";
  siskiyous += "<br>    - ERPG 64 Instrumentation and Control – course information not provided";
  siskiyous += "";
  siskiyous += "<h4>Environmental Resources - Sustainable Communities Certificate and Associate Degree </h4>";
  siskiyous += "<p>The Sustainable Communities program offers a practical, integrated and interdisciplinary examination of the interactions between humans and natural ecosystems with an emphasis on solutions and entrepreneurship. Students will explore a variety of green industries, new trends, entrepreneurial niches and green income opportunities. Through various hands on skills labs, community based internships and service projects students will gain marketable skills and customize their entry points into a green career pathway. ";
  siskiyous += "<br>    - ERRT 22 Introduction to Surveying ";
  siskiyous += "<br>    - ERRT 33 Forest Products";
  siskiyous += "";
  siskiyous += "<h4>Computer Science PC Network/Hardware/Software Certificate Program </h4>";
  siskiyous += "<p>This 16-unit certiﬁcate program is intended for individuals interested in building a solid foundation in the design and development of Internet communications. The coursework is appropriate for those exploring a new career as well as for those who want to add Web design to their current skill set.";
  siskiyous += "<br>    - CSCI 27 Computer Network ";
  siskiyous += "<br>    - CSCI 33 PC Hardware Certification";
  siskiyous += "<br>    - CSCI 34 PC Software Certification";
  siskiyous += "<br>    - CSCI 36 Wireless Communications";
  siskiyous += "";
  siskiyous += "<h4>Web Design Certificate </h4>";
  siskiyous += "<p>College of the Siskiyous is proud of the fact that we are able to offer up-to-date hardware and software which is on a continuous replacement plan.";
  siskiyous += "<br>    - ART 35 Web Design";
  siskiyous += "<br>    - CSCI 12 Web Programming";
  siskiyous += "<br>    - CSCI 28A Web Publishing I";
  siskiyous += "<br>    - CSCI 28B Web Publishing II";
  siskiyous += "";
  siskiyous += "<h4>Computer Science Associate Degree</h4>";
  siskiyous += "<p>This field of study is designed for students who seeks an associate degree to transfer and major in computer science or who seek employment at the technician level in the science or mathematics fields.";
  siskiyous += "<br>    - CSCI 4 Visual Basic Programming";
  siskiyous += "<br>    - CSCI 7 Programming I";
  siskiyous += "";
  siskiyous += "<h4>Engineering</h4>";
  siskiyous += "<p>The Associate of Science Degree in Engineering provides the student the opportunity to complete all the lower division courses required for transfer to a university to pursue a degree in Engineering. The core courses provide the technical knowledge and skills needed for students to complete their upper division engineering course work at the university. Students will be building upon their high school mathematics and physical science background.";
  siskiyous += "<br>    - ENGR  17 Intro to Circuit Analysis ";
  siskiyous += "<br>    - ENGR 2035 Mechanics for Engineers – Statics";
  
  //Feather River College
  var feather = "";
  feather += "";
  feather += "<h1>Feather River College</h1>";
  feather += "<p>Phone: 530-283-0202";
  feather += "<br>E-mail: jorloff@frc.edu";
  feather += "<br>College Catalog - 	<a href=\"http://www.frc.edu/admissionsandrecords/documents/catalog.pdf\">http://www.frc.edu/admissionsandrecords/documents/catalog.pdf</a>";
  feather += "<br>Website – <a href=\"www.frc.edu/index.cfm\">www.frc.edu/index.cfm</a>";
  feather += "";
  feather += "<h3>Certificate Programs</h3>";
  feather += "<p>No related Engineering Certificates / Programs offered.";
  
  //Las Positas College
  var positas = "";
  positas += "";
  positas += "<h1>Las Positas College</h1>";
  positas += "<p>Phone: 925-424-1000";
  positas += "<br>E-mail: lpcarcom@laspositascollege.edu ";
  positas += "<br>College Catalog - 	<a href=\"http://www.laspositascollege.edu/students/documents/2010Catalog.pdf\">http://www.laspositascollege.edu/students/documents/2010Catalog.pdf</a>";
  positas += "<br>Website – <a href=\"www.laspositascollege.edu/\">www.laspositascollege.edu/</a>";
  positas += "";
  positas += "<h3>Certificate Programs</h3>";
  positas += "<h4>Computer Science Degree</h4>";
  positas += "<p>This degree prepares students for transfer to four-year institutions for continued study in computer science. The program outlined fulfills typical lower-division requirements at four-year transfer institutions.";
  positas += "<br>    - CS 37 Web Programming ";
  positas += "<br>    - CS 39 Java Servlets and JSP ";
  positas += "<br>    - CS 44 Advanced Web Programming ";
  positas += "<br>    - CS 45 Database Programming ";
  positas += "";
  positas += "<h4>Computer Information Systems Program - Computer Applications Software (Microcomputers) Certificate </h4>";
  positas += "<p>This program introduces microcomputer applications, focusing on the most widely used 	applications of word processing, spreadsheets and databases. This certificate prepares students 	for employment in many entry-level positions using business software.";
  positas += "<br>    - CIS 59A Web Development: HTML/XHTML ";
  positas += "<br>    - CIS 69 Web Development: Web Design Technologies and Tools";
  positas += "<br>    - CIS 66 Networking Fundamentals ";
  positas += "";
  positas += "<h4>Computer Network Technology</h4>";
  positas += "<p>The Computer Networking Technology program prepares students for a variety of career opportunities including the networking field. CNT classes prepare students for Cisco CCNA and CCNP certification tests, Microsoft MCSE and MCSA tests, and CompTIA Net+, Security+ and A+ tests. Constantly evolving and modernizing classes include targeted skills training in Emerging Technologies like Wireless, VoIP, VPN, Computer Forensics, Incident Response, Network Security and OS Hardening. Many of these subjects have become basic required knowledge even in other career fields. Students in Business, the Sciences, Arts and Administration of Justice will all need skills in network technologies to excel in their fields. The Certifications for Achievement and Career Certifications provide quick paths to validate training in today’s important tech knowledge areas. The program also includes an AS degree in Network Security Administration. This degree incorporates the latest in Emerging Technologies and skills employers are seeking.";
  positas += "<br>    - CNT 52 Networking Fundamentals ";
  positas += "<br>    - CNT 67 Wireless Networks and Security CWNA "; 
  positas += "<br>    - CNT 69 Network Security Sec+";
  positas += "";
  positas += "<h4>Computer Programming Certificate and Associate Degree </h4>";
  positas += "<p>The curriculum is designed to prepare students for employment as computer programming 	professionals. Programming professionals in this field have a variety of titles, such as 		Programmer, Programmer/Analyst, Business Analyst, Systems Analyst, Computer Scientist, 	Information Technologist, Information Systems Professional, Information Technology 	Professional, Programming Professional, Software Developer, or Software Engineer.";
  positas += "<br>    - CS 20 Adv Prog w/Data Structures/C++  ";
  positas += "";
  positas += "<h4>Computer Programming for the Web Associate Degree </h4>";
  positas += "<p>The curriculum is designed to prepare students for employment as computer programming professionals in the web. Programming professionals in this field have a variety of titles, such as Webmaster, Programmer, Programmer/Analyst, Business Analyst, Systems Analyst, Computer Scientist, Information Technologist, Information Systems Professional, Information Technology Professional, Programming Professional, Software Developer, or Software Engineer.";
  positas += "<br>    - CS 4951	C# Programming  ";
  positas += "";
  positas += "<h4>Electronics Technology Certificate and Associate Degree </h4>";
  positas += "<p>The Electronics programs are designed to prepare students for a variety of career opportunities in the fields of electronics, computers, and related technologies. Students may prepare for direct job entry as technicians in computer sales, installation and repair.The Electronics Telecommunications Systems AS and Certificate programs prepare students for entry-level employment as technicians in the Electronics Communications (Telecommunications) fields.";
  positas += "<br>    - ELEC 56B Radio Communications II ";
  positas += "<br>    - ELEC 9901 Computer Assembly and Usage  ";
  positas += "<br>    - ELEC 9904 PC Troubleshooting/User Maint  ";
  positas += "<br>    - ELEC 9925 Networking Fundamentals  "; 
  positas += "";
  positas += "<h4>Engineering Transfer Program (Degree Program) </h4>";
  positas += "<p>This accredited and articulated program provides lower division engineering, mathematics, and science courses to prepare students to transfer to a four year institution to pursue an engineering degree. By completing the equivalent of a two-year lower-division program of courses, engineering students will be able to transfer to virtually any four-year college or university within California, or in other states.";
  positas += "<br>    - ENGR 44 Intro to Circuit Analysis  ";
  positas += "";
  positas += "<h4>Environmental Studies Degree Program </h4>";
  positas += "<p>The AA Degree program in Environmental Studies is a multi-disciplinary program which provides students the academic foundation for understanding the scientific and technological basis of energy technology, as well as the political, environmental, and economic factors that underlie the energy policy choices, at both the national and global levels, our students will make throughout their professional careers and also as informed citizens.";
  positas += "<br>    - EVST 5 ENERGY AND SUSTAINABILITY ";
  positas += "";
  
  //West Hills College Coalinga
  var westHills = "";
  westHills += "";
  westHills += "<h1>West Hills College Coalinga</h1>";
  westHills += "<p>Phone: 559-934-2000";
  westHills += "<br>E-mail: None Provided ";
  westHills += "<br>College Catalog - 	<a href=\"http://www.westhillscollege.com/coalinga/academics/catalog/2009-2011_whcc_academic_catalog.pdf\">http://www.westhillscollege.com/coalinga/academics/catalog/2009-2011_whcc_academic_catalog.pdf</a>";
  westHills += "<br>Website – <a href=\"www.laspositascollege.edu/\">www.laspositascollege.edu/</a>";
  westHills += "";
  westHills += "<h3>Certificate Programs</h3>";
  westHills += "<h4>Computer Information Systems Associate Degree and Certificate</h4>";
  westHills += "<p>The Computer Information Systems Program teaches concepts, procedures and terminology, as 	well as the skills and applications necessary to operate computers. ";
  westHills += "<br>    - CIS 19B Database Creation & Management ";
  westHills += "";
  
  //West Valley Community College
  var westValley = "";
  westValley += "";
  westValley += "<h1>West Valley Community College</h1>";
  westValley += "<p>Phone: 408-867-2200";
  westValley += "<br>E-mail: askwvc@westvalley.edu ";
  westValley += "<br>College Catalog - 	<a href=\"http://www.westvalley.edu/documents/catalog/2011-2012_WVC_Catalog.pdf\">http://www.westvalley.edu/documents/catalog/2011-2012_WVC_Catalog.pdf</a>";
  westValley += "<br>Website – <a href=\"http://www.westvalley.edu/\">http://www.westvalley.edu</a>";
  westValley += "";
  westValley += "<h3>Computer Information Systems Program</h3>";
  westValley += "<h4>Computer Science Option Associate Degree </h4>";
  westValley += "<p>The Computer and Information Systems Department at West Valley College offers a complete computer curriculum using state-of-the-art computing equipment. Students may choose a Business Applications option or Computer Science option (A.S. Degree or Certificate). The West Valley College counselors will aid in choosing the option that best meets the student's needs. The department's curriculum is grouped into four areas of interest. For those interested in general knowledge about computers and their applications, the Department offers introductory classes. These classes are often required for advanced study in business or other degrees and may be transferred to four-year colleges. A second area of emphasis is Business Applications where the emphasis is on the development of computer information systems within organizations. The third area is Computer Science, focusing on the study of programming languages and computer operations. ";
  westValley += "<br>    - PHYS 0004A Engineering Physics Mechanics ";
  westValley += "<br>    - PHYS 0004B Engineering Physics Electricity and Magnetism ";
  westValley += "<br>    - CIS 015 Software Design ";
  westValley += "";
  westValley += "<h4>Computer Science Certificate </h4>";
  westValley += "<p>After completing a CIS Computer Science Option Certificate, a student will be able to apply basic programming skills in the development of computing applications and operations within the general field of information technology.";
  westValley += "<br>    - CIS 015 Software Design ";
  westValley += "";
  westValley += "<h4>Engineering Associate Degree </h4>";
  westValley += "<p>Common Lower-Division Requirements: Certain math and physical science courses are common to all engineering programs as follows (check with your counselor regarding the specific four-year transfer school of your choice).";
  westValley += "<br>    - ENGR 020 Engineering Graphics ";
  westValley += "<br>    - ENGR 023 Vector Mechanics ";
  westValley += "";
  
  //Santa Rosa Jr College
  var santaRosa = "";
  santaRosa += "";
  santaRosa += "<h1>Santa Rosa Junior College</h1>";
  santaRosa += "<p>Phone: 707-527-4011";
  santaRosa += "<br>E-mail: mleahy@santarosa.edu ";
  santaRosa += "<br>College Catalog - 	<a href=\"http://www.santarosa.edu/schedules/college_catalog/SRJC.CATALOG.2011.2012.pdf\">http://www.santarosa.edu/schedules/college_catalog/SRJC.CATALOG.2011.2012.pdf</a>";
  santaRosa += "<br>Website – <a href=\"http://www.santarosa.edu\">http://www.santarosa.edu</a>";
  santaRosa += "";
  santaRosa += "<h3>Certificates / Programs</h3>";
  santaRosa += "<h4>Civil Engineering Technology Associate Degree and Certificate</h4>";
  santaRosa += "<p>The Civil Engineering Technology program prepares students for variety of technical positions in the civil engineering and engineering construction professions. The program recommended course sequence is set up to allow the student to progress through four 	semesters and achieve an Associates Degree or Certificate of Achievement.";
  santaRosa += "<br>    - CEST 81 Civil Engineering Design/ Drafting";
  santaRosa += "";
  santaRosa += "<h4>Computer Science Associate Degree </h4>";
  santaRosa += "<p>The computer Sciences major will allow students whose planned transfer major is Computer Science to earn an Associate Degree while meeting the typical lower division requirements for a Computer Science degree at a four-year institution.";
  santaRosa += "<br>    - CS 11 Data Structures and Algorithms ";
  santaRosa += "";
  santaRosa += "<h4>Electronic Technology Associate Degree </h4>";
  santaRosa += "<p>The Electronic Technology major offers students the basic foundation to perform the work of an electronic technician in both traditional engineering environments and service related environments.";
  santaRosa += "<br>    - ELEC 60B Fundamentals of Electronic Devices  ";
  santaRosa += "<br>    - ELEC 156 Photovoltaic Systems Design and Installation ";
  santaRosa += "<br>    - ELEC 157 Advanced Photovoltaic Systems ";
  santaRosa += "";
  santaRosa += "<h4>Engineering Associate Degree </h4>";
  santaRosa += "<p>The Engineering Transfer Program is designed for students seeking to fulfill lower division preparation for junior level transfer to bachelor degree engineering programs at four-year colleges and universities.  Students develop the analysis, teamwork, design, and communication skills necessary to succeed in their upper division work and as an engineer in industry.";
  santaRosa += "<br>    - ENGR 16 Electric Circuits & Devices   ";
  santaRosa += "<br>    - ENGR 25 Engineering Graphics and Design";
  santaRosa += "";
  santaRosa += "<h4>Civil Engineering Technology Certificate </h4>";
  santaRosa += "<p>The Civil Engineering Technology program prepares students for variety of technical 	positions in the civil engineering and engineering construction professions";
  santaRosa += "<br>    - CEST 81 Civil Engineering Design/ Drafting ";
  santaRosa += "";

  //Fresno City College
  var fresnoCity = "";
  fresnoCity += "";
  fresnoCity += "<h1>Fresno City College</h1>";
  fresnoCity += "<p>Phone: 559-442-4600";
  fresnoCity += "<br>E-mail: fcc.admissions@fresnocitycollege.edu";
  fresnoCity += "<br>College Catalog - 	<a href=\"http://www.fresnocitycollege.edu/index.aspx?page=1854\">http://www.fresnocitycollege.edu/index.aspx?page=1854</a>";
  fresnoCity += "<br>Website – <a href=\"www.fresnocitycollege.edu\">http://www.fresnocitycollege.edu</a>";
  fresnoCity += "";
  fresnoCity += "<h3>Certificates / Programs</h3>";
  fresnoCity += "<h4>Electrical Systems Technology Certificate and Associate </h4>";
  fresnoCity += "<p>Electrical Systems Technology provides an opportunity for students to prepare for employment in the electronics/electrical industry. Specific occupational preparation is provided in the following program.";
  fresnoCity += "<br>    - EST 56C Industrial Electronics ";
  fresnoCity += "<br>    - EST 59 Instrumentation Systems";
  fresnoCity += "<br>    - EST 58 Programmable Logic Controllers ";
  fresnoCity += "<br>    - CEST 81 Civil Engineering Design/ Drafting";
  fresnoCity += "";
  fresnoCity += "<h4>Information Security Certificate </h4>";
  fresnoCity += "<p>Designed to meet the training needs for qualified entry-level computer network security professionals. It is also designed to help prepare students for industry standard security certifications like CompTIA Security+, Security Certified Professional (SCP) and others.";
  fresnoCity += "<br>    - CIT 57 Wireless Networking ";
  fresnoCity += "<br>    - CIT 58C Network Security Fundamentals ";
  fresnoCity += "<br>    - CIT 58D Network Defense and Countermeasures  ";
  fresnoCity += "<br>    - CIT 58E Network Defense and Countermeasures ";
  fresnoCity += "";
  fresnoCity += "<h4>Microcomputer Software Specialist Certificate and Associate</h4>";
  fresnoCity += "<p>Designed for the nontransfer student leading to employment as a microcomputer software specialist or similar computer specialist. Completing the program with the college graduation requirements leads to an AS degree; with the graduation requirements, student is eligible for a certificate of achievement.";
  fresnoCity += "<br>    - CIT 45 Data Communications  ";
  fresnoCity += "";
  fresnoCity += "<h4>Networking/Computer Technician Associate Degree and Certificate</h4>";
  fresnoCity += "<p>This option is designed to meet the training needs for qualified entry-level microcomputer and networking technicians.";
  fresnoCity += "<br>    - CIT 40 Computer Operating Systems  ";
  fresnoCity += "<br>    - CIT 45 Data Communications ";
  fresnoCity += "<br>    - CIT 50 Fundamentals of Networking ";
  fresnoCity += "<br>    - EST 61 Networking Essentials ";
  fresnoCity += "";
  fresnoCity += "<h4>Wireless Networks Certificate</h4>";
  fresnoCity += "<p>Training is designed to prepare the student for employment as a networking technician emphasizing Wireless Local Area Networks.";
  fresnoCity += "<br>    - EST 61 Networking Essentials ";
  fresnoCity += "";
  fresnoCity += "<h4>Computer Science Transfer Degree </h4>";
  fresnoCity += "<br>    - CSCI 30 - PROGRAMMING IN THE PASCAL LANGUAGE";
  fresnoCity += "";
  fresnoCity += "<h4>Engineering Transfer Degree </h4>";
  fresnoCity += "<p>The following curriculum satisfies the lower division requirements of most colleges and universities that offer degrees in engineering. Depending upon the engineering field selected, students may be required to complete additional prerequisite classes. The student is strongly advised to consult with an advisor and compare his/her planned program with that listed in the catalog of the senior institution to which he/she expects to transfer.";
  fresnoCity += "<br>    - ENGR 4 – Engineering Materials ";
  fresnoCity += "";
  fresnoCity += "<h4>Solar Technician </h4>";
  fresnoCity += "<p>The Fresno City College Training Institute, in partnership with the Applied Technology Division of Fresno City College, is conducting a training program for Solar Technicians. The program is grant funded and free to participants. The next class will begin on February 6, 2012. The training is comprised of 128 hours, inclusive of: electrical fundamentals; solar energy fundamentals; electrical safety; PV modules and components; system sizing; electrical and mechanical design; maintenance and troubleshooting; CPR/First Aid; OSHA construction safety; and job search preparation. ";
  fresnoCity += "<br>    - Course information unavailable";
  fresnoCity += "";
  fresnoCity += "<h4>CISCO CCNA Preparation Certificate</h4>";
  fresnoCity += "<p>This option is to prepare students for the CISCO Certified Network Associate (CCNA) certification 	test. By completing this option, a student will have basic knowledge of networking hardware, 	including routers.";
  fresnoCity += "<br>    - EST 61 Networking Fundamentals";
  fresnoCity += "<br>    - EST 62 Routing Protocols and Concepts";
  fresnoCity += "<br>    - EST 63 Advanced Routing and Switching";
  fresnoCity += "<br>    - EST 64 Advanced Networking and Management";
  fresnoCity += "";
  fresnoCity += "<h4>CISCO CCNP Preparation</h4>";
  fresnoCity += "<p>This option is to prepare students for the CISCO Certified Networking Professional (CCNP) 	certification test. By completing this option, a student will have advanced knowledge of 	networking hardware, including routers and switches.";
  fresnoCity += "<br>    - EST 66 Building Multilayer Switched Networks";
  fresnoCity += "<br>    - EST 68 Optimizing Converged Networks";
  fresnoCity += "";
  fresnoCity += "<h4>Control Systems Certificate</h4>";
  fresnoCity += "<p>Training in this specialized field is designed to prepare the student for employment as a control 	and instrument technician.";
  fresnoCity += "<br>    - EST 58 Programmable Logic Controllers";
  fresnoCity += "<br>    - EST 59 Instrumentation Systems";
  fresnoCity += "<br>    - EST 63 Advanced Routing and Switching";
  fresnoCity += "<br>    - EST 64 Advanced Networking and Management";
  fresnoCity += "";
  fresnoCity += "<h4>Network Security Certificate</h4>";
  fresnoCity += "<p>Training is designed to prepare the student for employment as a networking technician 	emphasizing network security.";
  fresnoCity += "<br>    - EST 61 Networking Fundamentals";
  fresnoCity += "<br>    - EST 64 Advanced Networking and Management";
  fresnoCity += "<br>    - EST 269A Fund of Network Security-Firewalls";
  fresnoCity += "";
  
  //get the value
  var valu = selecter.options[selecter.selectedIndex].id;
  
  if (valu == "berk") {result.innerHTML = berkClasses;}
  if (valu == "davis") {result.innerHTML = davisClasses;}
  if (valu == "irvine") {result.innerHTML = irvineClasses;}
  if (valu == "ucla") {result.innerHTML = uclaClasses;}
  if (valu =="chabot") {result.innerHTML = chabot;}
  if (valu == "deanza") {result.innerHTML = deanza;}
  if (valu =="siskiyous") {result.innerHTML = siskiyous;}
  if (valu =="feather") {result.innerHTML = feather;}
  if (valu =="positas") {result.innerHTML = positas;}
  if (valu =="westHills") {result.innerHTML = westHills;}
  if (valu =="santaRosa") {result.innerHTML = santaRosa;}
  if (valu =="westValley") {result.innerHTML = westValley;}
  if (valu =="fresnoCity") {result.innerHTML = fresnoCity;}
}

/********************************************************************
* File Name:   jscript.js
*
* Description: Directs the user to get_school.php's proper function for
*				the school they have selected.
* 
* Programmer:  Kim Holmes 
*              zorianak@me.com
********************************************************************/
function addClasses2()
{
  var result = document.getElementById('resultsdiv');
  var selecter = document.getElementById('schools');
  
  var valu = selecter.options[selecter.selectedIndex].id;
  
  if (valu == "berk") {result.innerHTML = "<input type=\"submit\" value=\"Continue\" name=\"Continue_berk\" action=\"submit\" /> <input type=\"hidden\" id=\"berk\" name=\"berk\" value=\"berk\" />"; }
  if (valu == "davis") { result.innerHTML = "<input type=\"submit\" value=\"Continue\" name=\"Continue_davis\" action=\"submit\" /> <input type=\"hidden\" id=\"davis\" name=\"davis\" value=\"davis\" />"; }
  if (valu == "irvine") { result.innerHTML = "<input type=\"submit\" value=\"Continue\" name=\"Continue_irvine\" action=\"submit\" /> <input type=\"hidden\" id=\"irvine\" name=\"irvine\" value=\"irvine\" />"; }
  if (valu == "ucla") { result.innerHTML = "<input type=\"submit\" value=\"Continue\" name=\"Continue_ucla\" action=\"submit\" /> <input type=\"hidden\" id=\"ucla\" name=\"ucla\" value=\"ucla\" />"; }

  //if (valu == "davis") {result.innerHTML = davisClasses;}
  //if (valu == "irvine") {result.innerHTML = irvineClasses;}
  //if (valu == "ucla") {result.innerHTML = uclaClasses;}
  
  //eventually, re-work to use objects and use the following
  //result.innerHTML = selecter.options[selecter.selectedIndex].classes
}

/********************************************************************
* File Name:   jscript.js
*
* Description: Enables interest dropdown upon change of region.
* 
* Programmer1:  Nikitha Thouta 
*              nikitha.thouta@gmail.com
* Programmer2:  Kim Holmes
*              yes@kimiscool.me
********************************************************************/
function showInterest() {
    //Get the ID of the Interest select
	document.getElementById('interest_select').disabled=false;
}

/********************************************************************
* File Name:   jscript.js
*
* Description: Enables interest dropdown upon change of Interest.
* 
* Programmer:  Kim Holmes
*              yes@kimiscool.me
********************************************************************/
function showProgram() {
    //Get the ID of the Program select
	document.getElementById('programs_select').disabled=false;
}

/********************************************************************
* File Name:   jscript.js
*
* Description: Enables interest dropdown upon change of program.
* 
* Programmer:  Kim Holmes
*              yes@kimiscool.me
********************************************************************/
function enableSubmit() {
    //Get the ID of the Interest select
	document.getElementById('track_submit').disabled=false;
	document.getElementById('track_submit').value="Submit";
}

/********************************************************************
* File Name:   jscript.js
*
* Description: Displays results of form input.
* 
* Programmer2:  Kim Holmes
*              yes@kimiscool.me
********************************************************************/

function submitFilters() {
	//document.getElementById('northern-mechanicaleng-certification').innerHTML = "Dinosaurs go 'rawr'";
	
	//grab all of the elements that are of class clearfilter.  This clears them all out so that they
	//don't have the same contents each time this function is called.
	var clearfilterdivs;
	if(document.getElementsByClassName) {
		clearfilterdivs = document.getElementsByClassName('clearfilter');
	}
	
	for(var i = 0; i < clearfilterdivs.length; i++) {
		if(clearfilterdivs[i].textContent != '') {
			clearfilterdivs[i].setAttribute('style', 'display:none');
		}
	}
	
	var formpage = document.getElementById('forminfo').value;
	var region = document.getElementById('region_select').value;
	var interest = document.getElementById('interest_select').value;
	var programType = document.getElementById('programs_select').value;
	var errordiv = document.getElementById('errordiv').innerHTML;
	errordiv = "";
	//this variable will show what school has been selected.
	var schoolshow;
	
	var divIDFilter = "";
	if(formpage == 'highschoolgrads'){
		
		switch(region)
			{
				case "Northern": divIDFilter += "northern-";
									break;
				case 'Central': divIDFilter += "central-";
									break;
				case 'Southern': divIDFilter += "southern-";
									break;
				case 'no_region': document.getElementById('errordiv').innerHTML += "Please enter a region. ";
									break;
			}
		switch(interest)
			{
				case 'mechanical_engineering': divIDFilter +="mecheng-";
									break;
				case 'electrical_engineering': divIDFilter +="electricaleng-";
									break;
				case 'no_interest': document.getElementById('errordiv').innerHTML += "Please enter an area of interest. ";
									break;
			}
		switch(programType)
			{
				case "cert": divIDFilter += "cert";
									break;
				case 'twoyear': divIDFilter += "twoyear";
									break;
				case 'fouryear': divIDFilter += "fouryear";
									break;
				case 'no_program': document.getElementById('errordiv').innerHTML += "Please enter a program type. ";
			}
			//test error handling
			//document.getElementById('errordiv').innerHTML += "<br /><br />" + region + interest + programType + "<br /><br />" + divIDFilter;
	}
	
	if(formpage == 'engs'){
		
		switch(region)
			{
				case "Northern": divIDFilter += "northern-";
									break;
				case 'Central': divIDFilter += "central-";
									break;
				case 'Southern': divIDFilter += "southern-";
									break;
				case 'no_region': document.getElementById('errordiv').innerHTML += "Please enter a region. ";
									break;
			}
		switch(interest)
			{
				case 'mechanical_engineering': divIDFilter +="mecheng-";
									break;
				case 'electrical_engineering': divIDFilter +="electricaleng-";
									break;
				case 'no_interest': document.getElementById('errordiv').innerHTML += "Please enter an area of interest. ";
									break;
			}
		switch(programType)
			{
				case "cert": divIDFilter += "cert";
									break;
				case 'twoyear': divIDFilter += "twoyear";
									break;
				case 'fouryear': divIDFilter += "fouryear";
									break;
				case 'no_program': document.getElementById('errordiv').innerHTML += "Please enter a program type. ";
			}
			//test error handling
			//document.getElementById('errordiv').innerHTML += "<br /><br />" + region + interest + programType + "<br /><br />" + divIDFilter;
	}
	
	if(formpage == 'techt'){
		
		switch(region)
			{
				case "Northern": divIDFilter += "northern-";
									break;
				case 'Central': divIDFilter += "central-";
									break;
				case 'Southern': divIDFilter += "southern-";
									break;
				case 'no_region': document.getElementById('errordiv').innerHTML += "Please enter a region. ";
									break;
			}
		switch(interest)
			{
				case 'mechanical_engineering': divIDFilter +="mecheng-";
									break;
				case 'electrical_engineering': divIDFilter +="electricaleng-";
									break;
				case 'no_interest': document.getElementById('errordiv').innerHTML += "Please enter an area of interest. ";
									break;
			}
		switch(programType)
			{
				case "cert": divIDFilter += "cert";
									break;
				case 'twoyear': divIDFilter += "twoyear";
									break;
				case 'fouryear': divIDFilter += "fouryear";
									break;
				case 'no_program': document.getElementById('errordiv').innerHTML += "Please enter a program type. ";
			}
			//test error handling
			//document.getElementById('errordiv').innerHTML += "<br /><br />" + region + interest + programType + "<br /><br />" + divIDFilter;
	}
	
	if(formpage == 'vocational'){
		
		switch(region)
			{
				case "Northern": divIDFilter += "northern-";
									break;
				case 'Central': divIDFilter += "central-";
									break;
				case 'Southern': divIDFilter += "southern-";
									break;
				case 'no_region': document.getElementById('errordiv').innerHTML += "Please enter a region. ";
									break;
			}
		switch(interest)
			{
				case 'mechanical_engineering': divIDFilter +="mecheng-";
									break;
				case 'electrical_engineering': divIDFilter +="electricaleng-";
									break;
				case 'no_interest': document.getElementById('errordiv').innerHTML += "Please enter an area of interest. ";
									break;
			}
		switch(programType)
			{
				case "cert": divIDFilter += "cert";
									break;
				case 'twoyear': divIDFilter += "twoyear";
									break;
				case 'fouryear': divIDFilter += "fouryear";
									break;
				case 'no_program': document.getElementById('errordiv').innerHTML += "Please enter a program type. ";
			}
			//test error handling
			//document.getElementById('errordiv').innerHTML += "<br /><br />" + region + interest + programType + "<br /><br />" + divIDFilter;
	}
	//test error handling
	document.getElementById('errordiv').innerHTML += "<br /><br />" + region + interest + programType + "<br /><br />" + divIDFilter;
	
	
	
	document.getElementById(divIDFilter).setAttribute('style', 'display:block');
}

function clearDivs() {
if(document.getElementsByClassName) {
		clearfilterdivs = document.getElementsByClassName('clearfilter');
	}
	
	for(var i = 0; i < clearfilterdivs.length; i++) {
		if(clearfilterdivs[i].textContent != '') {
			clearfilterdivs[i].setAttribute('style', 'display:none');
		}
	}	
}