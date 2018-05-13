using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace customer.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddCors(options => {  
                //options.AddPolicy("fiver", policy => policy.WithOrigins("http://localhost:3000").WithMethods("GET", "POST", "HEAD"));  
                options.AddPolicy("AllowSpecificOrigin", policy => policy.WithOrigins("*").WithMethods("GET", "POST", "HEAD"));  
                //options.AddPolicy("Access-Control-Allow-Origin", policy => policy.with)
                //header('Access-Control-Allow-Origin: *');
                //header('Access-Control-Allow-Headers: X-Requested-With');
                //header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
            });  

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowSpecificOrigin"); 

            app.UseMvc();
        }
    }
}
