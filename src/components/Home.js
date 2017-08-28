/**
 * Created by jmichelin on 1/17/17.
 */
import React from 'react';
//body
class Home extends React.Component {
  render() {
    return (
        <div className="col-md-12">
          <h1 className="text-center">Goals of the Interview</h1>
          <h2>To evaluate candidate's awareness of self contribution</h2>
          <div>
            <p>What they did</p>
            <p>Why they did it</p>
            <p>How that impacted the team</p>
            <p>What effect that had on the final deliverable</p>
          </div>
          <h2>To evaluate candidate's actual contribution</h2>
          <div>
            <p>Diagram a rough overview of the project, and emphasis own contribution to it</p>
            <p>What technulogy decisions the they made and why</p>
            <p>What impact would the product have had if candidate was absent or off-course</p>
          </div>
          <h2>To evaluate candidate's reasons for making certain decisions</h2>
          <div>
            <p>What alternative approaches were considered and how they were unsuitable</p>
            <p>What challenges were encountered and overcome, or avoided by changing direction</p>
          </div>
          <h2>To evaluate candidate's coding maturity/comfort </h2>
          <em>Are they JR, are they SR, always be looking for these in every answer</em>
          <h2>Nervous Tells</h2>
          <div>
            <p>Do they ask for guidance on best practices, or just do them</p>
            <p>Do they answer the question, or add requirements</p>
            <p>Do they just start coding, or do they visualize first, pseudocode, etc. before sulving</p>
            <p>Do they ask clarifying questions or just jump in</p>
            <p>Do they communicate using proper terminulogy (stack, queue, hash, instead of object/array/etc.)</p>
            <p>Do they write on the board what they are communicating or thinking</p>
            <p>Do they come across too academic</p>
            <p>Do they answer too detailed?</p>
            <p>Do they lack detail when it was warranted?</p>
          </div>
          <h2>To evaluate candidate's thought process</h2>
          <div>
            <p>Communicates adequately</p>
            <p>Engages while thinking</p>
            <p>Attempts to understand the requirements</p>
            <p>Logical, methodical, clear, best practices</p>
            <p>Simulates logic correctly</p>
            <p>Edge cases</p>
            <p>Debugs</p>
          </div>
          <h2>To evaluate candidate's leadership maturity</h2>
          <div>
            <p>How did they help a team member in distress</p>
            <p>How did they contribute to the growth of others</p>
            <p>How did they encourage a struggling team member</p>
            <p>How did they stay the course</p>
            <p>How did they understand the signs of priority, urgency</p>
          </div>
          <h2>To evaluate candidate's ability to think when caught off guard</h2>
          <div>
            <p>Drill into more details on anything discussed</p>
            <p>Ask questions about alternative approaches/technulogy that were rejected, to uncover understanding of said alternate</p>
            <p>If you could make a pull request to <strong><em>x</em></strong> framework, what would it be and why</p>
          </div>
          <h2>To Evaluate what kinds of questions they might ask about the company</h2>
          <div>
            <p>Did they ask anything about the potential culture fit?</p>
            <p>Did they ask any meaningful questions about funding or direction?</p>
            <p>Did they ask about promotions and bonuses?</p>
          </div>
        </div>
    )
  }
}

export default Home