import React, { Component } from 'react'

 class Details extends Component {
   constructor(props){
     super(props);
     this.state={
       disease:"CoronaVirus",
       description:"Coronavirus is a family of viruses known for containing strains that cause potentially deadly diseases in mammals and birds. In humans they're typically spread via airborne droplets of fluid produced by infected individuals",
       symptoms:"Fever,Cough,>Difficulty in breathing,Fatigue,Headache,New loss of taste or smell,Sore throat,Nausea or vomiting, Diarrhea",
     };
   }
  render() {
    return(
      
      <div className="medicalchallenges">
      
      <h1 className="Heading">MEDICAL CHALLENGES </h1>;
      
     <h1>CoronaVirus</h1>
     
<p>Coronavirus is a family of viruses known for containing strains that cause potentially deadly diseases in mammals and birds. In humans they're typically spread via airborne droplets of fluid produced by infected individuals</p>

<div>
  <h3>Symptoms</h3>
  <li>Fever</li>
  <li>Cough</li>
  <li>Difficulty in breathing</li>
  <li>Fatigue</li>
  <li>Headache</li>
  <li>New loss of taste or smell</li>
  <li>Sore throat</li>
  <li>Nausea or vomiting</li>
  <li>Diarrhea</li>
  
  <h3>Precautions</h3>
  <li>Wash your hands thoroughly with warm water.</li>
  <li>Avoid touching your face </li>
  <li>Stop shaking hands and hugging people for now</li>
  <li>Don't share personal items like phones,makeup</li>
  <li>Cover your mouth and nose when you cough and sneeze</li>
  <li>Clean and disinfect surfaces</li>
  <li>Take physical (social) distancing seriously</li>
  <li>Do not gather in groups</li>
  <li>Avoid eating or drinking in public places</li>
  <li>Wear a mask</li>
  <li>Self-quarantine if sick</li>
  
  <h3>Treatment</h3>
<li>fluids to reduce the risk of dehydration</li>
<li>medication to reduce a fever</li>
<li>supplemental oxygen in more severe cases</li>
</div>
    
    
   
    <h1>Asthma</h1>
<p>A condition in which the airways (the tubes that carry air in and out of the lungs) narrow and swell causing reversible obstruction.</p>
 
        <div>
    <h3>Symptoms</h3>
    <li>Labored breathing</li>
    <li>Audible wheezing</li>
    <li>Tightness of ches</li>
    <li>Persistent coughing</li>
    <h3>Causes</h3>
    <li>Allergens like dust mites, animal dander, pollen, molds, cigarette smoke, chemical pollutants, and cold air</li>
    <li>Extreme emotional responses</li>
    <li>Physical exercise, and medications like aspirin, beta-blockers </li>
    <li>Dietary insufficiencies in vitamins C and E, and omega-3 fatty acids</li>
    <h3>Prevention</h3>
    <li>Identify the triggers - triggers could be exercise, certain foods, pollen</li>
    <li>Follow medication as prescribed</li>
    <li>Learn proper use of inhalers - including cleaning the inhalers</li>
    <li>Carry the inhalers and medicines to workplace/while traveling, to get an immediate relief during the attack</li>
   <li>Monitor your breathing often - it helps in controlling the symptoms</li>
   <h3>Medication</h3>
   <li>Try to keep your body warm.</li>
   <li>Avoid smoking and indirect smoking.</li>
  <li>Avoid strong odor in bedroom.</li>
   <li>Exposure to sunlight for a few minutes</li>
   <h3>Specialist to consult</h3>
   <li>Allergist<br></br>Specializes in the diagnosis and treatment of allergic disorders.</li>
   <li>Pulmonologist<br></br>Specializes in diagnosing and treating conditions that affect the respiratory system.</li>
   </div>
   
    <h1>Diabetes</h1>
    <p>Diabetes mellitus refers to a group of diseases that affect how your body uses blood sugar (glucose). Glucose is vital to your health because it's an important source of energy for the cells that make up your muscles and tissues. It's also your brain's main source of fuel.</p>
    
   
      <div>
<h3>Symptoms</h3>
<li>Increased thirst</li>
<li>Frequent urination</li>
<li>Extreme hunger</li>
<li>Unexplained weight loss</li>
<li>Fatigue</li>
<li>Blurred vision</li>
<h3>Prevention</h3>
<li>Eating a healthy diet, including monitoring your carbohydrate and calorie intake</li>
<li>Exercising for 30 minutes five times a week to keep your blood glucose levels in check, and to control weight gain</li>
    <h3>Medication</h3>
    <li>Insulin</li>
    <li>Amylinomimetic drug</li>
      </div>
        
        
       <h1>Hypertension(High Blood Pressure)</h1> 
       <p>High pressure in the arteries (vessels that carry blood from the heart to the rest of the body).</p>
      
        <div>
<h3>Symptoms</h3>
<li>Severe headache</li>
<li>Severe anxiety</li>
<li>Shortness of breath</li>
<li>Nosebleed</li>
<li>Feeling of pulsations in the neck or head</li>
<h3>Causes</h3>
<li>High salt intake</li>
<li>Smoking</li>
<li>Overweight</li>
<li>Too much of alcohol consumption</li>
<li>Stress</li>
<h3>Prevention</h3>
<li>Get regular exercise</li>
<li>Reduce salt intake</li>
<li>Take a well-balanced diet rich in calcium, potassium, and magnesium</li>
<h3>Medication</h3>
<li>Angiotensin II receptor blockers (ARBs): Helps relax the blood vessels to lower the pressure.</li>
  <li>Beta blockers: Helps in reducing the heart rate thus decreasing the blood pressure.</li>      
 <li>Eat more fruits, vegetables, and low-fat dairy foods</li>       
  <li>Eat more whole-grain foods, fish, poultry, and nuts</li>     
        </div>
        
        <h1>Heart Disease</h1>
        <p>Heart disease describes a range of conditions that affect your heart.</p>
        
      <div>
<h3>Symptoms</h3>
<li>Chest pain, chest tightness, chest pressure and chest discomfort </li>
<li>Shortness of breath</li>
<li>Pain, coldness in your legs or arms</li>
<li>Pain in the neck, jaw, throat, upper abdomen or back</li>
 <li>Dizziness</li>    
  <h3>Causes</h3> 
  <li>Coronary artery disease</li>  
  <li>High blood pressure</li>
  <li>Valvular heart disease</li>
  <li>Excessive use of alcohol or caffeine</li>
  <h3>Precautions</h3>  
  <li>Quit smoking</li> 
  <li>Control other health conditions, such as high blood pressure</li>
   <li>Eat a diet that's low in salt and saturated fat</li>  
    <li>Maintain a healthy weight</li>  

    <h3>Medication</h3>
    <li>EECP<br></br>This can help stimulate blood vessels to develop small branches, creating a natural bypass around narrowed or blocked arteries that cause chest pain.</li>
     <li>Pacemakers<br></br>It’s a small device that sends electrical impulses to the heart muscle to keep up a suitable heart rate and rhythm.</li>
     
      </div>
      
      <h1>Cancer</h1>
      <p>A disease caused by an uncontrolled division of abnormal cells in a part of the body.</p>
      
      <div>
      <h3>Symptoms</h3>  
      <li>Fatigue</li>
      <li>Area of thickening that can be felt under the skin</li>
      <li>Weight changes, including unintended loss or gain</li>
      <li>Skin changes, such as yellowing, darkening or redness of the skin</li>
     <li>Changes in bowel or bladder habits</li>
      <li>Difficulty swallowing</li>
      <li>Persistent cough or trouble breathing</li>
     <h3>Causes</h3>
     <li>Cancer is caused by changes (mutations) to the DNA within cells</li>
      <li>Fail to stop uncontrolled cell growth. A mutation in a tumor suppressor gene allows cancer cells to continue growing and accumulating.</li>
      <li>Make mistakes when repairing DNA errors.A mutation in a DNA repair gene may mean that other errors aren't corrected, leading cells to become cancerous.</li>
      <h3>Prevention</h3>
      <li>Stop smoking.Smoking leads to lung cancer</li>
      <li>Avoid excessive sun exposure. Harmful ultraviolet (UV) rays from the sun can increase your risk of skin cancer.</li>
      <li>Eat a healthy diet. Choose a diet rich in fruits and vegetables</li>
      <li>Exercise most days of the week</li>
    <li>Avoid alcohol</li>
    <h3>Medication</h3>
    <li>Carboplatin</li>
    <li>Leukeran</li>
    <li>Etoposide</li>
    <li>Paraplatin</li>
    <li>Radiation therapy. Radiation kills most cancer cells.</li>
    <li>Immune therapy. These therapies use the body's own immune system to attack and destroy cancer cells.</li>
   <li>Targeted therapy. This therapy uses a special chemotherapy drug that only kills cancer cells with a certain trait.</li>
    </div>
      <h1>Arthritis</h1>
      <p>A joint disorder which features inflammation of one or more joints.The main symptoms of arthritis are joint pain and stiffness, which typically worsen with age.</p>
       <div>
         <h3>Symptoms</h3>
         <li>Joint pain- knee or hip pain</li>
       <li>Swelling</li>
       <li>Redness in the joints</li>
       <li>Loss of appetite</li>
       <li>Tenderness in joints</li>
       <li>Fever</li>
<h3>Causes</h3>
<li>Wear and tear of cartilage in joints</li>
  <li>Metabolic abnormalities</li> 
  <li>Infection (Bacterial or Viral)</li>    
  <li>Injury</li>    
  <li>Genetic factors</li>    
  <h3>Prevention</h3>
  <li>The risk of arthritis can be reduced by altering eating habits and proper exercise.</li>
   <h3>Medication</h3>    
    <li>Analgesics<br></br> Reduces joint pain but does not reduce the inflammation.</li>   
     <li>Corticosteroids<br></br>Reduce inflammation and suppress the immune system.</li> 
      <li>Nonsteroidal anti-inflammatory drugs (NSAIDs)<br></br> It will help reduce both pain and inflammation</li>
       <li>Pain killers<br></br> It will reduce the joint pain.</li>
      <li>Physical therapy<br></br> For improving muscle strengths around joints.</li> 
       <h3>Specialist to consult</h3>
       <li>Rheumatologist<br></br>Specializes in the treatment of arthritis, autoimmune diseases, pain disorders affecting joints, and osteoporosis.</li>
       </div> 

       <h1>Epilepsy</h1>
       <p>A neurological disorder that causes seizures or unusual sensations and behaviors.</p>
       <div>
<h3>Symptoms</h3>
<li>Temporary confusion</li>
<li>Episodes of staring blankly</li>
<li>Uncontrollable jerking movements or twitching of the arms and legs</li>
<li>Loss of consciousness or awareness</li>
<li>Fear and anxiety</li>
     <h3>Causes</h3>  
     <li>Genetic changes that run in families</li>
       <li>Trauma or injury to head</li>
       <li>Medical conditions that affect the brain, for example, brain tumor or stroke</li>
       <li>Infectious diseases of the brain such as meningitis</li>
       <li>Damage or injury to the brain during birth</li>
      <li>Developmental disorders of the brain such as autism</li>
      <h3>Prevention</h3> 
      <li>Eat a healthy and nutritious diet</li>
       <li>Learn to manage stress effectively</li>
      <li>Get adequate rest</li>
      <li>Avoid tobacco and alcohol use</li>
      <h3>Medication</h3> 
      <li>Anti-seizure medications: To reduce the frequency and intensity of seizures.</li>
       <li>Ketogenic diet: a diet high in fat, but low in carbohydrates</li>
      <h3>Specialist to consult</h3>
      <li>Neurologist<br></br>Specializes in treating diseases of the nervous system, which includes the brain, the spinal cord, and the nerves.</li>
      </div> 

      <h1>Depression</h1>
      <p>Characterized by persistent sadness and a lack of interest or pleasure in previously rewarding or enjoyable activities</p>
      <div>
        <h3>Causes</h3>
        <li>Family history. You’re at a higher risk for developing depression if you have a family history of depression</li>
      <li> Early childhood trauma.</li>
      <li>Medical conditions</li>
      <li>Drug use</li>
      <li>Drug use</li>
      <h3>Medication</h3>
      <li>Get a hug from a loved one</li>
      <li>Enjoy aromatherapy</li>
      <li>Create artwork</li>
      <li>Try to be patient</li>
      <li>Take care of yourself</li>
      </div>  
        </div>
    
   
      );
    
    
  }
}
export default Details;
